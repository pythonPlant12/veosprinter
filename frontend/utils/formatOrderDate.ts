export const formatCustomDate = (dateObj?: {
  year: number;
  month: number;
  day: number;
}) => {
  if (!dateObj) return "";

  // Create a Date object
  const date = new Date(dateObj.year, dateObj.month - 1, dateObj.day);

  // Format the date
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
