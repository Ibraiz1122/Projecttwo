import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Position tracking
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop devices with hover/fine pointer capability
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Directly update inner dot for zero latency
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth Lerp animation loop for the trailing ring (Snappy and fast with cursor)
    let animationFrameId: number;
    const lerpSpeed = 0.28;

    const render = () => {
      // Linear interpolation
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpSpeed;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpSpeed;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      
      {/* Outer Smooth Trailing Ring Circle (Platinum Silver / Ice Chrome - Matches theme without cyan overload) */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none rounded-full border border-slate-200/60 bg-transparent will-change-transform w-8 h-8 transition-opacity duration-150 shadow-[0_0_8px_rgba(255,255,255,0.15)] ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isClicked ? 'scale-90 border-white' : 'scale-100'}`}
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)'
        }}
      />

      {/* Inner Precision Pointer Dot (Exact Mouse Center - Crisp Diamond White) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)] w-1.5 h-1.5 will-change-transform transition-opacity duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)'
        }}
      />

    </div>
  );
};
