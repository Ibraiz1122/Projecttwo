import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Car, 
  Calendar as CalendarIcon, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { 
  VEHICLE_TYPES, 
  SERVICE_PACKAGES, 
  ADD_ON_SERVICES, 
  COMPANY_INFO 
} from '../data/mockData';
import type { VehicleCategory } from '../types';
import { sendBookingEmail } from '../utils/emailService';


interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackageId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  preselectedPackageId 
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Form State
  const [vehicleType, setVehicleType] = useState<VehicleCategory>('sedan');
  const [vehicleDetails, setVehicleDetails] = useState('');
  const [selectedPackageId, setSelectedPackageId] = useState<string>(preselectedPackageId || 'signature-detail');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [serviceLocation, setServiceLocation] = useState<'shop' | 'mobile'>('shop');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  // Selected vehicle multiplier
  const currentVehicle = VEHICLE_TYPES.find(v => v.id === vehicleType) || VEHICLE_TYPES[0];
  const currentPackage = SERVICE_PACKAGES.find(p => p.id === selectedPackageId) || SERVICE_PACKAGES[1];

  // Calculate pricing
  const basePackagePrice = Math.round(currentPackage.startingPrice * currentVehicle.priceMultiplier);
  const addOnsTotal = selectedAddOns.reduce((total, addOnId) => {
    const item = ADD_ON_SERVICES.find(a => a.id === addOnId);
    return total + (item ? item.price : 0);
  }, 0);
  const estimatedTotal = basePackagePrice + addOnsTotal;

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter(item => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const timeSlots = [
    '8:00 AM - 10:00 AM',
    '10:30 AM - 12:30 PM',
    '1:00 PM - 3:00 PM',
    '3:30 PM - 5:30 PM'
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendBookingEmail({
        customerName,
        customerPhone,
        customerEmail,
        customerAddress,
        vehicleType: currentVehicle.name,
        vehicleDetails,
        packageName: currentPackage.name,
        addOns: selectedAddOns.map(id => ADD_ON_SERVICES.find(a => a.id === id)?.name || id),
        serviceLocation,
        selectedDate,
        selectedTimeSlot,
        estimatedTotal,
        notes
      });
    } catch (err) {
      console.error('Booking email error:', err);
    } finally {
      setIsSubmitting(false);
      setStep(5); // Confirmation Screen
    }
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#0f131c] border border-cyan-500/20 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#141924]/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">Online Booking Studio</span>
              <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                Step {step > 4 ? 4 : step} of 4
              </span>
            </div>
            <h2 className="text-xl font-bold text-white font-['Outfit']">
              Schedule Your Detail at ShineCraft
            </h2>
          </div>
          <button 
            onClick={resetAndClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-900 h-1">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
            style={{ width: `${(Math.min(step, 4) / 4) * 100}%` }}
          />
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          
          {/* STEP 1: VEHICLE TYPE */}
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">1. Select Vehicle Size & Class</h3>
                <p className="text-xs text-slate-400">
                  Vehicle dimensions determine chemical quantity, machine compounding stages, and labor time.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {VEHICLE_TYPES.map((v) => (
                  <div
                    key={v.id}
                    onClick={() => setVehicleType(v.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      vehicleType === v.id
                        ? 'bg-cyan-950/40 border-cyan-400 shadow-lg shadow-cyan-500/10'
                        : 'bg-[#141823] border-white/5 hover:border-white/20 hover:bg-[#181d2a]'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400">
                        <Car className="w-5 h-5" />
                      </div>
                      {vehicleType === v.id && (
                        <div className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base font-['Outfit']">{v.name}</h4>
                      <p className="text-xs text-slate-400 mb-2">{v.tagline}</p>
                      <p className="text-[11px] text-slate-500 italic">Examples: {v.popularModels}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Year, Make, Model & Color (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2023 Porsche 911 GT3 (Agate Grey)"
                  value={vehicleDetails}
                  onChange={(e) => setVehicleDetails(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#141823] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>Select Package</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: CHOOSE PACKAGE & ADDONS */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">2. Choose Detailing Package</h3>
                <p className="text-xs text-slate-400">
                  Pricing automatically reflects your chosen vehicle class: <strong className="text-cyan-400">{currentVehicle.name}</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {SERVICE_PACKAGES.map((pkg) => {
                  const packagePrice = Math.round(pkg.startingPrice * currentVehicle.priceMultiplier);
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                        selectedPackageId === pkg.id
                          ? 'bg-cyan-950/40 border-cyan-400 shadow-lg shadow-cyan-500/10'
                          : 'bg-[#141823] border-white/5 hover:border-white/20 hover:bg-[#181d2a]'
                      }`}
                    >
                      {pkg.badge && (
                        <span className="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          {pkg.badge}
                        </span>
                      )}
                      <div>
                        <h4 className="font-bold text-white text-base font-['Outfit'] pr-16">{pkg.name}</h4>
                        <p className="text-xs text-slate-400 line-clamp-2 my-2">{pkg.tagline}</p>
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-2">
                        <div>
                          <span className="text-[11px] text-slate-500 block">Estimated Rate</span>
                          <span className="text-lg font-extrabold text-white font-['Outfit']">${packagePrice}</span>
                        </div>
                        <span className="text-[11px] text-slate-400 bg-white/5 px-2 py-1 rounded-md">
                          {pkg.estimatedTime}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Add-on Upgrades */}
              <div>
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Optional Precision Add-ons</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ADD_ON_SERVICES.map((addon) => {
                    const isSelected = selectedAddOns.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.id)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-xs ${
                          isSelected
                            ? 'bg-cyan-950/50 border-cyan-400 text-white'
                            : 'bg-[#141823] border-white/5 text-slate-300 hover:border-white/10'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isSelected ? 'bg-cyan-400 border-cyan-400 text-slate-950' : 'border-slate-600'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <div>
                            <span className="font-semibold block">{addon.name}</span>
                            <span className="text-[10px] text-slate-400">{addon.duration}</span>
                          </div>
                        </div>
                        <span className="font-bold text-cyan-400">+${addon.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block uppercase">Est. Total</span>
                    <span className="text-lg font-bold text-cyan-400 font-['Outfit']">${estimatedTotal}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                  >
                    <span>Date & Location</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: LOCATION & SCHEDULE */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">3. Service Location & Preferred Time</h3>
                <p className="text-xs text-slate-400">
                  Drop off at our Washington Ave studio or have our outfitted mobile van come to your Houston location.
                </p>
              </div>

              {/* Service Location Choice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div
                  onClick={() => setServiceLocation('shop')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    serviceLocation === 'shop'
                      ? 'bg-cyan-950/40 border-cyan-400'
                      : 'bg-[#141823] border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Recommended for Ceramic</span>
                    {serviceLocation === 'shop' && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                  </div>
                  <h4 className="font-bold text-white text-sm">Washington Ave Studio</h4>
                  <p className="text-xs text-slate-400 mt-1">4820 Washington Ave, Houston, TX 77007. Climate-controlled dust-free lighting.</p>
                </div>

                <div
                  onClick={() => setServiceLocation('mobile')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    serviceLocation === 'mobile'
                      ? 'bg-cyan-950/40 border-cyan-400'
                      : 'bg-[#141823] border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Convenience</span>
                    {serviceLocation === 'mobile' && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                  </div>
                  <h4 className="font-bold text-white text-sm">Mobile On-Site Detailing</h4>
                  <p className="text-xs text-slate-400 mt-1">We bring spot-free deionized water, power, and equipment right to your home/office.</p>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#141823] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Available Arrival Slot</span>
                  </label>
                  <select
                    value={selectedTimeSlot}
                    onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#141823] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                  >
                    <option value="">Select a time window...</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <span>Contact Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT & CONFIRMATION */}
          {step === 4 && (
            <form onSubmit={handleBookingSubmit} className="space-y-4 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">4. Your Contact & Appointment Confirmation</h3>
                <p className="text-xs text-slate-400">
                  No immediate payment required online. We will call you within 2 business hours to confirm slot availability.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#141823] border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number (Houston) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(713) 555-0123"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#141823] border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="alex.rivera@example.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141823] border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              {serviceLocation === 'mobile' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Houston Service Address *</label>
                  <input
                    type="text"
                    required
                    placeholder="Street Address, City, Houston Zip Code"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#141823] border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Special Notes / Paint Concerns</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Tree sap on hood, dog hair in rear cargo, swirled black paint"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141823] border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none resize-none"
                />
              </div>

              {/* Order Summary Box */}
              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">{currentPackage.name}</span>
                  <span className="text-slate-400">{currentVehicle.name} • {serviceLocation === 'shop' ? 'Washington Ave Studio' : 'Mobile Houston'}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block uppercase">Estimated Total</span>
                  <span className="text-lg font-extrabold text-cyan-400 font-['Outfit']">${estimatedTotal}</span>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting via EmailJS...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Request Appointment Booking</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 5: SUCCESS CONFIRMATION */}
          {step === 5 && (
            <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center mx-auto text-cyan-400 shadow-xl shadow-cyan-500/20">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white font-['Outfit']">Appointment Request Received!</h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto mt-2">
                  Thank you, <strong className="text-white">{customerName || 'valued client'}</strong>. Our studio lead will call you at <strong className="text-cyan-400">{customerPhone || COMPANY_INFO.phone}</strong> shortly to finalize your time slot.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#141823] border border-white/10 text-left max-w-md mx-auto text-xs space-y-2">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Selected Package:</span>
                  <span className="font-bold text-white">{currentPackage.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Vehicle Type:</span>
                  <span className="font-bold text-white">{currentVehicle.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Estimated Total:</span>
                  <span className="font-bold text-cyan-400">${estimatedTotal} (Pay at handover)</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-400">Studio Location:</span>
                  <span className="font-bold text-slate-200">{COMPANY_INFO.address}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={resetAndClose}
                className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all"
              >
                Close & Return to Website
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
