import { SITE } from '@/data';

export const buildWhatsAppUrl = ({ name, email, subject, message }) => {
  const text = [
    `Hello ${SITE.fullName},`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    '',
    'Message:',
    message,
  ].join('\n');

  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
};

export const sendWhatsAppMessage = (payload) => {
  const url = buildWhatsAppUrl(payload);
  const popup = window.open(url, '_blank', 'noopener,noreferrer');

  if (!popup) {
    window.location.href = url;
  }

  return { ok: true, url };
};
