import React, { useState } from 'react';
import { 
  Check, 
  Clock, 
  ArrowRight, 
  Car
} from 'lucide-react';
import { 
  SERVICE_PACKAGES, 
  VEHICLE_TYPES, 
  ADD_ON_SERVICES 
} from '../data/mockData';
import type { VehicleCategory } from '../types';


interface ServicesPageProps {
  onOpenBooking: (packageId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const [selectedVehicleType, setSelectedVehicleType] = useState<VehicleCategory>('sedan');

  const currentVehicle = VEHICLE_TYPES.find(v => v.id === selectedVehicleType) || VEHICLE_TYPES[0];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
          Transparent Automotive Care
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-['Outfit'] mb-4">
          Detailing Packages & Pricing
        </h1>
        <p className="text-sm text-slate-300">
          Tailored to your vehicle size with honest pricing. We never compromise on chemical safety, soft microfiber towels, or paint depth analysis.
        </p>
      </div>

      {/* Vehicle Size Switcher Banner */}
      <div className="p-6 rounded-3xl bg-[#111622] border border-cyan-500/20 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Car className="w-5 h-5 text-cyan-400" />
              <span>Select Your Vehicle Size for Live Accurate Pricing:</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Currently showing pricing for: <strong className="text-cyan-400">{currentVehicle.name}</strong> ({currentVehicle.popularModels})
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {VEHICLE_TYPES.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelectedVehicleType(v.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all ${
                selectedVehicleType === v.id
                  ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                  : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm font-['Outfit']">{v.name}</span>
                {selectedVehicleType === v.id && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                )}
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-1">{v.tagline}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {SERVICE_PACKAGES.map((pkg) => {
          const adjustedPrice = Math.round(pkg.startingPrice * currentVehicle.priceMultiplier);

          return (
            <div
              key={pkg.id}
              className={`group rounded-3xl border bg-[#10141d] overflow-hidden flex flex-col justify-between relative shadow-2xl transition-all duration-500 hover:border-cyan-500/50 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-10px_rgba(6,182,212,0.25)] ${
                pkg.isPopular ? 'border-cyan-500/40 ring-1 ring-cyan-500/20' : 'border-white/10'
              }`}
            >
              {/* Service Card Image Frame with Hover Reveal */}
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  style={pkg.imagePosition ? { objectPosition: pkg.imagePosition } : undefined}
                  className="w-full h-full object-cover brightness-[0.85] saturate-[0.9] contrast-[0.95] group-hover:brightness-105 group-hover:saturate-110 group-hover:contrast-105 group-hover:scale-110 transition-all duration-700 ease-out will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10141d]/85 via-[#10141d]/15 to-black/25 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {pkg.badge && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-cyan-400 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg">
                    {pkg.badge}
                  </div>
                )}
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Est. Duration: {pkg.estimatedTime}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white font-['Outfit'] mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 mb-6 flex items-baseline justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block uppercase font-medium">
                      Estimated Cost for {currentVehicle.name}
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-white font-['Outfit']">
                        ${adjustedPrice}
                      </span>
                      <span className="text-xs text-slate-400">tax incl.</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-cyan-400">
                    {pkg.category === 'ceramic-protection' ? 'Warranty Included' : '100% Satisfaction'}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    What's Included:
                  </h4>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                <span className="text-[11px] text-slate-400 italic">
                  Drop-off or Mobile service available
                </span>
                <button
                  onClick={() => onOpenBooking(pkg.id)}
                  className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/20 hover:scale-[1.02]'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  <span>Book This Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      </div>

      {/* A-LA-CARTE ADD-ONS SECTION */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0f131c] border border-white/10">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-1">
            Tailored Upgrades
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
            Individual Add-On Treatments
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Can be bundled with any wash or detailing package during booking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ADD_ON_SERVICES.map((addon) => (
            <div
              key={addon.id}
              className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between hover:border-cyan-500/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-cyan-400 font-['Outfit']">+${addon.price}</span>
                  <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded-full">{addon.duration}</span>
                </div>
                <h4 className="font-bold text-white text-sm mb-2">{addon.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{addon.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PACKAGE COMPARISON TABLE */}
      <div className="p-8 rounded-3xl bg-[#0f131c] border border-white/10 overflow-x-auto">
        <h2 className="text-2xl font-extrabold text-white font-['Outfit'] mb-6">
          Detailed Feature Comparison Matrix
        </h2>
        <table className="w-full text-left text-xs border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-white/10 text-slate-400 uppercase tracking-wider text-[11px]">
              <th className="py-4 pr-4">Detailing Treatment</th>
              <th className="py-4 px-3 text-center">Essential</th>
              <th className="py-4 px-3 text-center text-cyan-400 font-bold">Signature</th>
              <th className="py-4 px-3 text-center">Ceramic Shield</th>
              <th className="py-4 px-3 text-center">Interior Studio</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-slate-300">
            <tr>
              <td className="py-3.5 pr-4 font-medium text-white">pH-Neutral Foam Hand Wash</td>
              <td className="py-3.5 px-3 text-center text-cyan-400 font-bold">✓</td>
              <td className="py-3.5 px-3 text-center text-cyan-400 font-bold">✓</td>
              <td className="py-3.5 px-3 text-center text-cyan-400 font-bold">✓</td>
              <td className="py-3.5 px-3 text-center text-slate-600">—</td>
            </tr>
            <tr>
              <td className="py-3.5 pr-4 font-medium text-white">Iron Decon & Clay Bar Treatment</td>
              <td className="py-3.5 px-3 text-center text-slate-600">—</td>
              <td className="py-3.5 px-3 text-center text-cyan-400 font-bold">✓</td>
              <td className="py-3.5 px-3 text-center text-cyan-400 font-bold">✓</td>
              <td className="py-3.5 px-3 text-center text-slate-600">—</td>
            </tr>
            <tr>
              <td className="py-3.5 pr-4 font-medium text-white">Multi-Stage Machine Paint Correction</td>
              <td className="py-3.5 px-3 text-center text-slate-600">—</td>
              <td className="py-3.5 px-3 text-center text-slate-500">1-Stage</td>
              <td className="py-3.5 px-3 text-center text-cyan-400 font-bold">Multi-Stage (90%+ defects)</td>
              <td className="py-3.5 px-3 text-center text-slate-600">—</td>
            </tr>
            <tr>
              <td className="py-3.5 pr-4 font-medium text-white">Hot Water Steam Carpet Extraction</td>
              <td className="py-3.5 px-3 text-center text-slate-600">—</td>
              <td className="py-3.5 px-3 text-center text-cyan-400 font-bold">✓</td>
              <td className="py-3.5 px-3 text-center text-cyan-400 font-bold">✓</td>
              <td className="py-3.5 px-3 text-center text-cyan-400 font-bold">✓</td>
            </tr>
            <tr>
              <td className="py-3.5 pr-4 font-medium text-white">Leather Deep Clean & Conditioning</td>
              <td className="py-3.5 px-3 text-center text-slate-500">Wipe down</td>
              <td className="py-3.5 px-3 text-center text-cyan-400 font-bold">Balm conditioning</td>
              <td className="py-3.5 px-3 text-center text-cyan-400 font-bold">Full treatment</td>
              <td className="py-3.5 px-3 text-center text-cyan-400 font-bold">Ceramic leather guard</td>
            </tr>
            <tr>
              <td className="py-3.5 pr-4 font-medium text-white">Ceramic Coating Duration</td>
              <td className="py-3.5 px-3 text-center text-slate-500">4 Weeks (Spray)</td>
              <td className="py-3.5 px-3 text-center text-slate-400">6 Months (Sealant)</td>
              <td className="py-3.5 px-3 text-center text-cyan-400 font-bold">3 to 5 Years (9H Barrier)</td>
              <td className="py-3.5 px-3 text-center text-slate-600">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Honest Detailer's Advisory Guide */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0e121a] border border-cyan-500/20 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-1">
            The Honest Truth
          </span>
          <h2 className="text-2xl font-extrabold text-white font-['Outfit']">
            Which Level Of Care Does Your Car Actually Need?
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            We don't recommend services you don't need. Here is our straightforward guide to help you choose the right package.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">Scenario A: Routine Upkeep</span>
            <h4 className="text-sm font-bold text-white">Essential Wash & Wax ($140+)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Your car already has healthy paint or was recently ceramic coated. You need a safe two-bucket decon wash without inducing new swirl scratches.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">Scenario B: The Annual Reset</span>
            <h4 className="text-sm font-bold text-white">Signature Full Detail ($285+)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Your daily driver hasn’t had a deep clean in 6+ months. You want hot-water steam extraction for seats, clay bar for smooth glass-like paint, and a 6-month ceramic sealant.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">Scenario C: Permanent Perfection</span>
            <h4 className="text-sm font-bold text-white">Precision Correction & Ceramic ($695+)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              You just bought a new car or your black/dark paint is covered in spiderweb swirls. You want 90%+ defect removal and a permanent 9H ceramic warranty barrier.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
