export const dateFormatter = (date: Date, format: string) => {
  let dateString = format;
  dateString = dateString.replace(/YYYY/, date.getFullYear().toString());
  dateString = dateString.replace(/MM/, (date.getMonth() + 1).toString());
  dateString = dateString.replace(/DD/, date.getDate().toString());

  return dateString;
};
