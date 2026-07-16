import { useCallback, useMemo, useState } from 'react';
import { validateContactForm } from '@/utils/validation';
import { sendWhatsAppMessage } from '@/services/whatsapp';

export const useContactForm = (fields) => {
  const initial = useMemo(
    () => Object.fromEntries(fields.map((field) => [field.name, ''])),
    [fields]
  );
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }, []);

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const nextErrors = validateContactForm(values, fields);
      setErrors(nextErrors);

      if (Object.keys(nextErrors).length) {
        setStatus('error');
        return;
      }

      setStatus('loading');
      try {
        await new Promise((resolve) => setTimeout(resolve, 350));
        sendWhatsAppMessage(values);
        setStatus('success');
        setFeedback('success');
        setValues(initial);
      } catch {
        setStatus('error');
        setFeedback('error');
      }
    },
    [fields, values, initial]
  );

  const resetStatus = useCallback(() => {
    setStatus('idle');
    setFeedback('');
  }, []);

  return {
    values,
    errors,
    status,
    feedback,
    onChange,
    onSubmit,
    resetStatus,
  };
};
