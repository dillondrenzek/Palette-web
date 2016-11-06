import { Color } from '@palette/color';

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function randomColor(): Color {

  let red = getRandomIntInclusive(0, 255);
  let green = getRandomIntInclusive(0, 255);
  let blue = getRandomIntInclusive(0, 255);
  return new Color({ red: red, green: green, blue: blue });
}
