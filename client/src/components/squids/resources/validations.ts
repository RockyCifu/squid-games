export const validations = {
  required: { value: true, message: "* This entry is required", minLength: 1, maxLength: 255 },
  experiencePointsMin: {
    value: 1,
    message: "* Must be between 1 - 1000",
  },
  experiencePointsMax: {
    value: 1000,
    message: "* Must be between 1 - 1000",
  },
};
