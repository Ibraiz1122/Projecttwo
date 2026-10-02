import React from 'react';
import { 
  Shield, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Clock, 
  Droplets, 
  Award,
  ChevronRight
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  SERVICE_PACKAGES, 
  BEFORE_AFTER_PROJECTS, 
  CUSTOMER_REVIEWS, 
  FAQ_ITEMS 
} from '../data/mockData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  onOpenBooking: (packageId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab, onOpenBooking }) => {
  return (
    <div className="space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Dark Luxury Automotive Background Image with Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=90"
            alt="Porsche 911 detailed with ceramic coating mirror shine"
            className="w-full h-full object-cover object-center opacity-30 scale-105 transform motion-safe:animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090c] via-[#08090c]/70 to-transparent" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-6">
          <div className="max-w-3xl">
            
            {/* Location & Real Studio Status */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-lg shadow-cyan-500/10">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Washington Ave Studio • Houston, TX</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open Today until 6:30 PM</span>
              </div>
            </div>

            {/* Bold Handcrafted Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-['Outfit']">
              We Don't Just Wash Cars <br />
              <span className="cyan-gradient-text">We Resurrect Clear Coats</span> & Paintwork
            </h1>

            {/* Sub-headline with real Houston climate context */}
            <p className="text-base sm:text-lg text-slate-300 mb-6 max-w-2xl leading-relaxed">
              Between the hot Texas sun, highway driving, and automatic car washes, vehicle paint takes a beating. We carefully check paint thickness, remove swirl marks, and apply long lasting ceramic coatings so your car stays protected and easy to clean.
            </p>

            {/* Real Craftsman Guarantee Note */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-8 max-w-2xl flex items-center gap-3.5 text-xs text-slate-300">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 font-bold font-['Outfit']">
                IDA
              </div>
              <div>
                <p className="font-semibold text-white">Marcus Vance, Studio Founder</p>
                <p className="text-slate-400">"Every single vehicle is checked under dedicated inspection lighting before handover. We take pride in delivering clean, swirl free results."</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-base shadow-xl shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Schedule Studio Detail</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>View Packages & Exact Pricing</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {COMPANY_INFO.stats.map((stat, idx) => (
                <div key={idx} className="text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED SERVICES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
              Master Craftsmanship
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
              Precision Detailing Packages
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              From routine maintenance washes to multi-stage paint correction and multi-year ceramic protection barriers.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors"
          >
            <span>View All Packages & Pricing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_PACKAGES.slice(0, 3).map((pkg) => (
            <div
              key={pkg.id}
              className={`group rounded-3xl border bg-[#10141d] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-cyan-500/50 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_15px_35px_-10px_rgba(6,182,212,0.25)] ${
                pkg.isPopular ? 'border-cyan-500/40 relative' : 'border-white/10'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-cyan-400 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Service Card Image Frame with Hover Reveal */}
              <div className="h-56 sm:h-60 overflow-hidden relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  style={pkg.imagePosition ? { objectPosition: pkg.imagePosition } : undefined}
                  className="w-full h-full object-cover brightness-[0.85] saturate-[0.9] contrast-[0.95] group-hover:brightness-105 group-hover:saturate-110 group-hover:contrast-105 group-hover:scale-110 transition-all duration-700 ease-out will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10141d]/85 via-[#10141d]/15 to-black/25 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{pkg.estimatedTime}</span>
                    </span>
                    <span>Starting from</span>
                  </div>

                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-xl font-bold text-white font-['Outfit']">
                      {pkg.name}
                    </h3>
                    <span className="text-2xl font-black text-cyan-400 font-['Outfit']">
                      ${pkg.startingPrice}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {pkg.features.slice(0, 4).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenBooking(pkg.id)}
                  className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/20 hover:scale-[1.02]'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <span>Book This Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE & AFTER SHOWCASE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
            The Proof Is In The Reflection
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
            Studio Before & After Transformations
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Authentic 50/50 test panels and complete vehicle comparisons. Experience the true difference between swirl-damaged paint and our mirror ceramic finish.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BeforeAfterSlider project={BEFORE_AFTER_PROJECTS[0]} />
          <BeforeAfterSlider project={BEFORE_AFTER_PROJECTS[1]} />
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => {
              setActiveTab('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <span>Explore More Client Transformations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* WHY CHOOSE SHINECRAFT / THE DIFFERENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0f131c] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
              Uncompromising Standards
            </span>
            <h2 className="text-3xl font-extrabold text-white font-['Outfit']">
              Why Discerning Houston Drivers Trust ShineCraft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">
                Paint Depth Gauge Precision
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We measure clear-coat thickness with digital ultrasonic gauges before touching any rotary polisher to ensure safe, zero-burn correction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">
                Texas UV & Heat Resistance
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Houston’s high humidity and intense sunshine quickly oxidizes factory clear coats. Our 9H ceramics create a permanent hydrophobic barrier.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">
                100% Satisfaction Handover
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every vehicle undergoes a 24-point handover inspection under 5,000K daylight inspection lamps before you drive away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED HOUSTON REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
            Houston Car Owners Speak
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
            ))}
            <span className="text-xs font-bold text-slate-300 ml-2">4.9 / 5.0 on Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-[#10141d] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 italic">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{rev.name}</h4>
                  <p className="text-[11px] text-cyan-400">{rev.neighborhood}</p>
                  <p className="text-[10px] text-slate-500">{rev.vehicle}</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-semibold">
                  Verified Client
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
            Transparency First
          </span>
          <h2 className="text-3xl font-extrabold text-white font-['Outfit']">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#10141d] border border-white/10"
            >
              <h3 className="text-base font-bold text-white mb-2 font-['Outfit']">
                {item.question}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
