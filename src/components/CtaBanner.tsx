import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#121622] via-[#101928] to-[#121622] border border-cyan-500/25 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Atmospheric Cyan Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-xl text-center md:text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-2 block">
            Houston's Discerning Car Care
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
            Ready to restore your vehicle to showroom glory?
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            Book online in under 2 minutes or speak directly with our certified master detailer.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-center md:justify-end gap-3">
          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all hover:border-white/20"
          >
            Call {COMPANY_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
};
