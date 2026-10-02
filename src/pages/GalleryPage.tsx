import React, { useState } from 'react';
import { BEFORE_AFTER_PROJECTS } from '../data/mockData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ArrowRight, Eye } from 'lucide-react';


interface GalleryPageProps {
  onOpenBooking: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBooking }) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Paint Correction', 'Ceramic Coating', 'Interior Restoration'];

  const filteredProjects = filterCategory === 'All'
    ? BEFORE_AFTER_PROJECTS
    : BEFORE_AFTER_PROJECTS.filter(p => p.category === filterCategory);


  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
          Visual Transformations
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-['Outfit'] mb-4">
          Before & After Gallery
        </h1>
        <p className="text-sm text-slate-300">
          True paint correction is not an illusion or temporary wax filler. Explore our unedited real-world before and after results below.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              filterCategory === cat
                ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-[#121622] text-slate-400 hover:text-white border border-white/5 hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Interactive Before & After Sliders Grid */}
      <div className="space-y-12">
        <div className="flex items-center gap-2">
          <Eye className="w-5 h-5 text-cyan-400" />
          <h2 className="text-2xl font-bold text-white font-['Outfit']">
            Featured Interactive Comparisons
          </h2>
          <span className="text-xs text-slate-400 ml-2">(Drag to reveal)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {filteredProjects.map((project, idx) => {
            const isLastOdd = idx === filteredProjects.length - 1 && filteredProjects.length % 2 !== 0;
            return (
              <div 
                key={project.id} 
                className={isLastOdd ? "lg:col-span-2 flex justify-center w-full" : "w-full"}
              >
                <div className={isLastOdd ? "w-full lg:max-w-[590px]" : "w-full"}>
                  <BeforeAfterSlider project={project} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#101928] to-[#121622] border border-cyan-500/20 text-center max-w-3xl mx-auto space-y-4">
        <h3 className="text-2xl font-bold text-white font-['Outfit']">
          Want These Same Results for Your Vehicle?
        </h3>
        <p className="text-xs text-slate-300 max-w-lg mx-auto">
          Every vehicle is unique. Schedule an appointment or bring your car to our Washington Ave studio for a complimentary paint inspection.
        </p>
        <button
          onClick={onOpenBooking}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Schedule Detailing Service</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
