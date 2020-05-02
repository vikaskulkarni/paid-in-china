const isProduction = process.env.NODE_ENV === "production";
console.log("isProduction->", isProduction);
const devtool = isProduction ? "source-map" : "inline-source-map";
module.exports = devtool;
