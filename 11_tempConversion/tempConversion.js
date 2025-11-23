const convertToCelsius = function(f) {
  farenheiht = Math.round(((f - 32) * 5 / 9) * 10) / 10;
  farenheiht = parseFloat(farenheiht.toFixed(1));
  return farenheiht;
};

const convertToFahrenheit = function(c) {
  ceslius = Math.round(((c * 9 / 5) + 32) * 10) / 10;
  celsius = parseFloat(ceslius.toFixed(1));
  return celsius;
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
