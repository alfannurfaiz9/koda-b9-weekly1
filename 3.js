const fahrenheitToCelcius = (f) => {
  console.log(`${f} Celcius adalah ${(f * 9) / 5 + 32} Fahrenheit`);

  return (f * 9) / 5 + 32;
};

fahrenheitToCelcius(-10);

const celciusToFahrenheit = (c) => {
  console.log(`${c} Celcius adalah ${(c - 32) / 1.8} Fahrenheit`);

  return (c - 32) / 1.8;
};

celciusToFahrenheit(5);
