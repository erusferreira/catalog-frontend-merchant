export const parseDate = (locale: string, date?: string | Date) => {
  if (!date) {
    return "-";
  }
  return new Date(date).toLocaleDateString(locale, { timeZone: "UTC" });
};