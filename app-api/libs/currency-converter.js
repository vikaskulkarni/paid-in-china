import axios from "axios";

export async function convert(howMuch, currency) {
  const resp = await axios.get(
    "https://openexchangerates.org/api/latest.json?app_id=ffeb39cd300d480192407dc85aceed6c"
  );
  const data = resp.data;
  let fx = require("./money");
  if (typeof fx !== "undefined" && fx.rates) {
    fx.rates = data.rates;
    fx.base = data.base;
  } else {
  }

  const result = fx.convert(howMuch, {
    from: currency,
    to: "USD",
  });

  return result;
  //return result.data;
}
