export const validations = {
  required: { value: true, message: "* This entry is required", minLength: 1, maxLength: 255 },
  min: {
    value: 1,
    message: "* Must be between 1 - 1000",
  },
  max: {
    value: 1000,
    message: "* Must be between 1 - 1000",
  },
};
