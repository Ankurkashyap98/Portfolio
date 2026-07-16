import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/constants';

export const isEmailConfigured = () =>
  Boolean(
    EMAILJS_CONFIG.serviceId &&
      EMAILJS_CONFIG.templateId &&
      EMAILJS_CONFIG.publicKey &&
      !EMAILJS_CONFIG.serviceId.includes('your_')
  );

export const sendContactEmail = async (payload) => {
  if (!isEmailConfigured()) {
    await new Promise((resolve) => setTimeout(resolve, 900));
    return { ok: true, mocked: true };
  }

  await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    {
      from_name: payload.name,
      from_email: payload.email,
      subject: payload.subject,
      message: payload.message,
    },
    EMAILJS_CONFIG.publicKey
  );

  return { ok: true, mocked: false };
};
