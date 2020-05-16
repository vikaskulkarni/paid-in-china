export const getMoneyValue = (amount) => {
  let approx = parseFloat(amount).toFixed(2);

  const getApproxValue = (value) => parseFloat(value).toFixed(2);

  let retVal =
    Math.abs(Number(approx)) >= 1.0e12
      ? getApproxValue(Math.abs(Number(approx)) / 1.0e12) + "T"
      : Math.abs(Number(approx)) >= 1.0e9
      ? getApproxValue(Math.abs(Number(approx)) / 1.0e9) + "B"
      : Math.abs(Number(approx)) >= 1.0e6
      ? getApproxValue(Math.abs(Number(approx)) / 1.0e6) + "M"
      : Math.abs(Number(approx)) >= 1.0e3
      ? getApproxValue(Math.abs(Number(approx)) / 1.0e3) + "K"
      : Math.abs(Number(approx));

  return retVal;
};
