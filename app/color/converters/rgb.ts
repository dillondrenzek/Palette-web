import { Color } from '../Color';
import { RGB } from '../interfaces';



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
