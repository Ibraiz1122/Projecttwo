import emailjs from '@emailjs/browser';

// EmailJS Credentials (Stored directly in frontend config)
export const EMAILJS_CONFIG = {
  publicKey: '-QtdiZo4OcnAjVBCI',
  serviceId: 'service_ik00usp',
  templateId: 'template_inr1ow6',
};

// Initialize EmailJS
try {
  if (EMAILJS_CONFIG.publicKey) {
    emailjs.init({
      publicKey: EMAILJS_CONFIG.publicKey,
    });
  }
} catch (err) {
  console.warn('EmailJS initialization notice:', err);
}

export interface ContactEmailData {
  name: string;
  phone: string;
  email: string;
  vehicleYearMakeModel?: string;
  serviceInterest: string;
  message: string;
}

export interface BookingEmailData {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress?: string;
  vehicleType: string;
  vehicleDetails?: string;
  packageName: string;
  addOns?: string[];
  serviceLocation: 'shop' | 'mobile';
  selectedDate: string;
  selectedTimeSlot: string;
  estimatedTotal: number;
  notes?: string;
}

/**
 * Send Contact / Custom Quote Request Email
 */
export async function sendContactEmail(data: ContactEmailData): Promise<{ success: boolean; error?: string }> {
  try {
    const templateParams = {
      from_name: data.name,
      to_name: 'ShineCraft Studio Lead',
      reply_to: data.email,
      phone_number: data.phone,
      vehicle_info: data.vehicleYearMakeModel || 'Not Specified',
      service_requested: data.serviceInterest,
      message: data.message,
      submission_time: new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' }),
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log('[EmailJS] Contact email sent successfully:', response.status, response.text);
    return { success: true };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : JSON.stringify(err);
    console.error('[EmailJS] Contact email send error:', errorMessage);
    return { success: false, error: errorMessage };
  }
}

/**
 * Send Booking Appointment Request Email
 */
export async function sendBookingEmail(data: BookingEmailData): Promise<{ success: boolean; error?: string }> {
  try {
    const templateParams = {
      from_name: data.customerName,
      to_name: 'ShineCraft Bookings',
      reply_to: data.customerEmail,
      phone_number: data.customerPhone,
      address: data.customerAddress || 'Drop-off at Washington Ave Studio',
      vehicle_type: data.vehicleType,
      vehicle_details: data.vehicleDetails || 'Standard',
      service_package: data.packageName,
      add_ons: data.addOns?.join(', ') || 'None',
      service_location: data.serviceLocation === 'shop' ? 'Washington Ave Studio' : 'Mobile Dispatch',
      preferred_date: data.selectedDate,
      preferred_time: data.selectedTimeSlot,
      estimated_total: `$${data.estimatedTotal}`,
      special_notes: data.notes || 'None',
      submission_time: new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' }),
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log('[EmailJS] Booking email sent successfully:', response.status, response.text);
    return { success: true };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : JSON.stringify(err);
    console.error('[EmailJS] Booking email send error:', errorMessage);
    return { success: false, error: errorMessage };
  }
}
