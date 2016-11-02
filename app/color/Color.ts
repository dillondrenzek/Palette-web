import { validColorValue } from './validation/functions';
import { RGB, HSL, Hex } from './interfaces';
import { toHexString, toHex } from './converters/hex';
import { toRgbString, stringToRGB } from './converters/rgb';

/**
 * Color
 */

export class Color {

  // Raw Data Store
  _rgb: RGB = { red: null, green: null, blue: null };

  /**
   * @param { RGB } - object w/ red, green, blue number values
   */
  constructor( colorObj?: RGB | string ) {
    if (colorObj) {
      if (colorObj['red']) {
        this._rgb = colorObj;
      } else if (typeof colorObj == 'string') {
        this._rgb = stringToRGB(colorObj);
      }
    }
  }

  // Get Red
  get red(): number { return this._rgb.red; }
  set red(r: number) { this._rgb.red = r; }

  // Get Green
  get green(): number { return this._rgb.green; }
  set green(g: number) { this._rgb.green = g; }

  // Get Blue
  get blue(): number { return this._rgb.blue; }
  set blue(b: number) { this._rgb.blue = b; }



  // Object

  toRGB(): RGB { return this._rgb; }



  // String

  toRGBString(): string {
    return toRgbString(this);
  }
}
