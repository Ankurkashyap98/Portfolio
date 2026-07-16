export const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

export const validateContactForm = (values, fields) => {
  const errors = {};

  fields.forEach((field) => {
    const value = values[field.name]?.trim?.() ?? values[field.name];

    if (field.required && !value) {
      errors[field.name] = `${field.label} is required.`;
      return;
    }

    if (field.type === 'email' && value && !validateEmail(value)) {
      errors[field.name] = 'Enter a valid email address.';
    }

    if (field.name === 'message' && value && value.length < 12) {
      errors[field.name] = 'Please write a bit more detail.';
    }
  });

  return errors;
};
