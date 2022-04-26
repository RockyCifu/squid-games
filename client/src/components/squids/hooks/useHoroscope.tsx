import tellSign from "sign-teller";

export const useHoroscope = (birthday: string | null): string => {
  if (!birthday) return;
  const date = new Date(Date.parse(birthday));
  return tellSign({ day: date.getDate(), month: date.getMonth() + 1 }, "tropical").sign;
};
