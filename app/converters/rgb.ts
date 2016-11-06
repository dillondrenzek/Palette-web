import { Color, RGB } from '@palette/color';

export function stringToRGB(str: string): RGB {
  if (!str) return null;
  let compArray: string[] = str.replace(/(rgb|\(|\))/g, '').split(',');
  return {
    red: parseInt(compArray[0]),
    green: parseInt(compArray[1]),
    blue: parseInt(compArray[2])
  };
}

export function toRgbString(c: Color): string {
  return [
    'rgb(',
    c.red,
    ',',
    c.green,
    ',',
    c.blue,
    ')'
  ].join('');
}
