import { Color } from '../Color';
import { Hex } from '../interfaces';

export let hexChars = "0123456789ABCDEF";

export function toHexString(c: Color, withSymbol: boolean = true): string {
  let symbol = (withSymbol) ? '#' : '';
  return [
    symbol,
    hexNumber(c.red),
    hexNumber(c.green),
    hexNumber(c.blue)
  ].join('');
}

export function toHex(c: Color): Hex {
  return {
    red: hexNumber(c.red),
    green: hexNumber(c.green),
    blue: hexNumber(c.blue)
  };
}


export function hexNumber(n: number): string {
  n = Math.max(0, Math.min(n, 255));
  return hexChars.charAt(( n - n%16) / 16)
    + hexChars.charAt(n%16);
}
