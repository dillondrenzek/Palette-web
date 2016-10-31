import { validColorValue } from './validation/functions';
import { RGB, HSL, Hex } from './interfaces';
import { toHexString, toHex } from './converters/hex';
import { toRgbString } from './converters/rgb';

/**
 * Color
 */

export class Color {

  // Raw Data Store
  _rgb: RGB = { red: 0, green: 0, blue: 0 };

  /**
   * @param { RGB } - object w/ red, green, blue number values
   */
  constructor( colorObj?: RGB ) {
    if (colorObj) { this._rgb = colorObj; }
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

  // toHSL(): HSL { return toHSL(this); }

  toHex(): Hex { return toHex(this); }



  // String

  toRGBString(): string {
    return toRgbString(this);
  }

  toHexString(withSymbol: boolean = true): string {
    return toHexString(this, withSymbol);
  }
}










export class ColorValue {

  // Raw color value is kept on 0 to 1 scale
  constructor(private _value: number = null) {}
  private set value(v: number) {
    if ( v >= 0 && v <= 1 ) {
      this._value = v;
    }
  }
  private get value(): number { return this._value; }


  static hex(input: any): ColorValue {
    return null;
  }

  static percent(input: any): ColorValue {
    return null;
  }

  static 255(input: any): ColorValue {

    if (typeof input === 'string') {
      input = parseInt(input);
    }

    if (typeof input === 'number') {

      input = (input < 0) ? 0 : input;
      input = (input > 255) ? 255 : input;
      input = input / 255;

      return new ColorValue(input);
    }

    return null;
  }
}
