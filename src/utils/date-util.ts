// @ts-ignore
function formattedDate(value, type, inMs) {
  if (!type) return value;

  if (!inMs) {
    value = value * 1000;
  }
  const date = new Date(value);
  let options;
  switch (type) {
    case "date":
      options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      break;
    case "time":
      options = {
        hour: "numeric",
        minute: "numeric",
      };
      break;
    default:
      break;
  }

  // @ts-ignore
  return new Intl.DateTimeFormat("en-us", options).format(date);
}

export { formattedDate };
