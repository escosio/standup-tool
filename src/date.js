const date = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const niceDateString = date.toLocaleDateString("us-EN", options);

export default niceDateString;
