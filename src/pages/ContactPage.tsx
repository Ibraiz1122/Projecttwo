import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { sendContactEmail } from '../utils/emailService';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleYearMakeModel: '',
    serviceInterest: 'Signature Detail',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await sendContactEmail(formData);
    } catch (err) {
      console.error('Contact email error:', err);
    } finally {
      setIsSending(false);
      setFormSubmitted(true);
    }
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
          Get In Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-['Outfit'] mb-4">
          Contact & Custom Quote Request
        </h1>
        <p className="text-sm text-slate-300">
          Have questions about your paint condition or want an in-person assessment? We’re ready to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Col: Contact Information, Hours & Location (5 cols) */}
        <div className="lg:col-span-5 h-full">
          <div className="h-full p-8 sm:p-10 rounded-3xl bg-[#10141d] border border-white/10 shadow-2xl flex flex-col justify-between space-y-6">
            
            {/* Top: Studio Details */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                  Washington Corridor Studio
                </span>
                <h3 className="text-2xl font-bold text-white font-['Outfit']">
                  ShineCraft Detailing Studio
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Centrally located in Houston for studio drop-off & mobile detailing.
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Studio Location</h4>
                    <p className="text-slate-400">{COMPANY_INFO.address}</p>
                    <p className="text-[11px] text-cyan-400 mt-0.5">{COMPANY_INFO.landmarks}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Direct Phone</h4>
                    <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-slate-300 hover:text-cyan-400 text-sm font-semibold transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Talk directly with lead detailer Marcus</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Email Inquiries</h4>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-cyan-400 transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Prompt written quote reply</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-white/5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Operating Hours</h4>
                    <p className="text-slate-300">Mon - Fri: {COMPANY_INFO.hours.weekdays}</p>
                    <p className="text-slate-300">Saturday: {COMPANY_INFO.hours.saturday}</p>
                    <p className="text-slate-500">{COMPANY_INFO.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Integrated Map Visual Card */}
            <div className="pt-4 border-t border-white/10">
              <div className="h-36 rounded-2xl bg-[#141824] border border-white/5 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative text-center p-3">
                  <div className="w-9 h-9 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center mx-auto text-cyan-400 mb-1.5 shadow-lg shadow-cyan-500/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-bold text-white">4820 Washington Ave, Houston, TX</p>
                  <p className="text-[10px] text-cyan-400">Centrally accessible from Heights, River Oaks & Memorial</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Col: Quote Request & Inquiry Form (7 cols) */}
        <div className="lg:col-span-7 h-full">
          <div className="h-full p-8 sm:p-10 rounded-3xl bg-[#10141d] border border-white/10 shadow-2xl relative flex flex-col justify-between">
            
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center mx-auto text-cyan-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-['Outfit']">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you for contacting ShineCraft. Our Houston studio manager will review your vehicle details and call/email you within 2 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                    Direct Inquiry Form
                  </span>
                  <h3 className="text-2xl font-bold text-white font-['Outfit']">
                    Request a Customized Quote
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Describe your vehicle and requirements. We’ll provide an accurate timeline and quote.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Harris"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141823] border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number (Houston) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(713) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141823] border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="michael@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141823] border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Vehicle Year, Make & Model</label>
                    <input
                      type="text"
                      placeholder="e.g. 2024 BMW M4 Competition"
                      value={formData.vehicleYearMakeModel}
                      onChange={(e) => setFormData({ ...formData, vehicleYearMakeModel: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141823] border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Service of Interest</label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141823] border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="Precision Paint Correction & Ceramic">Precision Paint Correction & Ceramic Coating</option>
                    <option value="Signature Detail">Signature Complete Full Detail</option>
                    <option value="Essential Wash & Wax">Essential Maintenance Wash</option>
                    <option value="Interior Restoration">Interior Deep Steam & Leather Restorative</option>
                    <option value="Custom Fleet / Exotic Care">Custom Exotic / Collector Car Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Describe Vehicle Condition or Concerns</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about swirl marks, water spotting, leather staining, or if you prefer mobile service..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141823] border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Request via EmailJS...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send In-Depth Quote Request</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
