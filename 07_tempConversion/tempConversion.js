// F to C = (x - 32) * (5/9) 
const convertToCelsius = function(temp) {
  const tempToCelsius = ((temp - 32) * (5/9));
  return Number(tempToCelsius.toFixed(1));
};

// C to F = (x * (9/5) + 32)  
const convertToFahrenheit = function(temp) {
  const tempToFahrenheit = (temp * (9/5) + 32);
  return Number(tempToFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
