const ftoc = function(fahrenheit) {
  const convert = (fahrenheit - 32) / 1.8 ;
  return round (convert,1);
};

const ctof = function(celcius) {
  const convert = (celcius * 1.8) + 32;
  return  round (convert,1);
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
