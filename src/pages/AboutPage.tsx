import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Droplets
} from 'lucide-react';

interface AboutPageProps {
  onOpenBooking?: () => void;
  setActiveTab?: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Hero / Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
            Houston's Precision Detailing Studio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-['Outfit'] mb-6 leading-tight">
            We Don't Just Wash Cars <br />
            <span className="cyan-gradient-text">We Perfect Surfaces</span>
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            We started ShineCraft right here in Houston with a straightforward goal. We treat every vehicle that rolls through our doors with the same care and patience as our personal cars, focusing on clean work and honest results.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed mb-8">
            The Texas sun, road debris, and automatic car washes quickly take away that showroom shine. Whether you bring us a weekend sports car or a daily family vehicle, we take our time to polish the paint safely and protect every surface for years ahead.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#121622] border border-white/5">
              <span className="text-2xl font-bold text-white font-['Outfit'] block">100%</span>
              <span className="text-xs text-slate-400">Swirl Free Handover Guarantee</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#121622] border border-white/5">
              <span className="text-2xl font-bold text-cyan-400 font-['Outfit'] block">IDA</span>
              <span className="text-xs text-slate-400">Certified Master Craftsmen</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative transition-all duration-500 group-hover:border-cyan-500/40 group-hover:shadow-[0_15px_40px_-10px_rgba(6,182,212,0.25)]">
            <img
              src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80"
              alt="Detailer carefully polishing a sports car"
              className="w-full h-[450px] object-cover brightness-[0.85] saturate-[0.85] contrast-[0.95] group-hover:brightness-105 group-hover:saturate-110 group-hover:contrast-105 group-hover:scale-108 transition-all duration-700 ease-out will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0e121a]/90 backdrop-blur-md border border-white/10 group-hover:border-cyan-500/30 transition-all duration-500">
              <p className="text-xs font-bold text-white mb-0.5">Washington Ave Detailing Facility</p>
              <p className="text-[11px] text-slate-400">4,200 square feet of clean indoor studio space with professional inspection lighting.</p>
            </div>
          </div>
        </div>
      </div>

      {/* The 4 Technical Pillars */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0f131c] border border-white/10 space-y-10">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-1">
            Our Standard Of Excellence
          </span>
          <h2 className="text-3xl font-extrabold text-white font-['Outfit']">
            The 4 Technical Pillars of ShineCraft
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1 font-['Outfit']">1. Digital Paint Gauges</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We never guess paint thickness. We measure every panel with digital ultrasonic gauges before any polishing starts.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1 font-['Outfit']">2. Purified Spot Free Water</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Houston tap water leaves stubborn mineral stains. We wash every car with pure filtered water for a clean dry finish.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1 font-['Outfit']">3. 9H Ceramic Protection</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Durable ceramic protection that shields your clear coat against Texas sunlight, summer heat, and road grime.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1 font-['Outfit']">4. Clean Satin Finish</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No greasy dressings that attract road dust. We condition leather and trim so they look clean and natural like factory original.
            </p>
          </div>
        </div>
      </div>

      {/* Professional Tooling & Chemistry Arsenal */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0d1017] border border-white/10 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-1">
            Studio Arsenal
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
            Certified Tooling & Chemistry Partners
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            We never use bulk drum soaps or harsh pads that leave swirl marks. We only work with industry trusted tools and products from around the world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <span className="text-xs font-bold text-white block">Rupes BigFoot (Italy)</span>
            <span className="text-[11px] text-slate-400">Professional polishers designed to remove swirls safely without burning clear coat.</span>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <span className="text-xs font-bold text-white block">Scangrip Lighting (Denmark)</span>
            <span className="text-[11px] text-slate-400">High output inspection lights that show every scratch and defect clearly before handover.</span>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <span className="text-xs font-bold text-white block">Gtechniq & CarPro (UK)</span>
            <span className="text-[11px] text-slate-400">Durable ceramic coatings with real manufacturer backed warranties.</span>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <span className="text-xs font-bold text-white block">Colourlock (Germany)</span>
            <span className="text-[11px] text-slate-400">Gentle leather cleaners and protectants designed for luxury car interiors.</span>
          </div>
        </div>
      </div>


    </div>
  );
};
