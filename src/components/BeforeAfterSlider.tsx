import React from 'react';
import type { BeforeAfterProject } from '../types';
import { 
  Clock, 
  CheckCircle2 
} from 'lucide-react';

interface BeforeAfterSliderProps {
  project: BeforeAfterProject;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ project }) => {
  return (
    <div className="bg-[#0f131c] border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-cyan-500/40 flex flex-col">
      
      {/* Top Header Bar of the Card */}
      <div className="px-6 py-4 bg-[#141926] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[11px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {project.category}
          </span>
          <h3 className="font-bold text-white text-base font-['Outfit']">
            {project.vehicle}
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span>{project.completionHours} Process</span>
        </div>
      </div>

      {/* Main Image Comparison Frame */}
      <div className="relative w-full aspect-[16/9] bg-black overflow-hidden group">
        
        {project.fullComparisonImage ? (
          /* Single Composite / Matched 50-50 Image */
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={project.fullComparisonImage}
              alt={project.title}
              className="w-full h-full object-cover object-center brightness-[0.88] saturate-[0.92] contrast-[0.96] group-hover:brightness-105 group-hover:saturate-105 group-hover:contrast-105 group-hover:scale-105 transition-all duration-700 ease-out will-change-transform"
            />
            {/* Dividing Line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-80 pointer-events-none shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
          </div>
        ) : (
          /* Real Dual Photos Side-by-Side (Natural Human-Crafted Comparison) */
          <div className="flex w-full h-full overflow-hidden">
            <div className="w-1/2 h-full relative overflow-hidden border-r border-white/20">
              <img
                src={project.beforeImage}
                alt={`Before ${project.title}`}
                className="w-full h-full object-cover object-center brightness-[0.88] saturate-[0.92] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out will-change-transform"
              />
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
            </div>
            <div className="w-1/2 h-full relative overflow-hidden">
              <img
                src={project.afterImage}
                alt={`After ${project.title}`}
                className="w-full h-full object-cover object-center brightness-[0.92] saturate-[0.95] group-hover:brightness-105 group-hover:saturate-105 group-hover:scale-105 transition-all duration-700 ease-out will-change-transform"
              />
              <div className="absolute inset-0 bg-cyan-950/10 pointer-events-none" />
            </div>
          </div>
        )}

      </div>

      {/* Detail Breakdown: Clean, Elegant Human Story */}
      <div className="p-5 sm:p-6 bg-[#0c1018] flex-1 flex flex-col justify-between gap-5">
        
        {/* Two Comparison Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Initial Condition */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300 tracking-wide flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                Initial Condition
              </span>
              <span className="text-[11px] text-slate-500 font-medium">Before</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
              {project.problem}
            </p>
          </div>

          {/* Studio Treatment */}
          <div className="p-4 rounded-2xl bg-cyan-500/[0.04] border border-cyan-500/25 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-cyan-300 tracking-wide flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Studio Treatment
              </span>
              <span className="text-[11px] text-cyan-400 font-medium">Completed</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-normal">
              {project.solution}
            </p>
          </div>

        </div>

        {/* Clean Minimal Footer Bar */}
        <div className="pt-3.5 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            <span className="text-slate-500">Service: </span>
            <span className="text-white font-medium">{project.packageUsed}</span>
          </div>

          <div className="flex items-center gap-2 text-cyan-400 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Showroom Handover Verified</span>
          </div>
        </div>

      </div>

    </div>
  );
};
