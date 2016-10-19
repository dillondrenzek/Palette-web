import { validColorValue } from './validation/functions';
import { RGB } from './interfaces';


/**
 * Color
 */

export class Color {

  // Raw Data Store
  private _rgb: RGB = { red: 0, green: 0, blue: 0 };



  /**
   * @param { RGB } - object w/ red, green, blue number values
   */
  constructor( colorObj?: RGB ) {
    if (colorObj) this.set(colorObj);
  }





// --------------------------------------------------
// PUBLIC METHODS
// --------------------------------------------------

  getRGB(): RGB { return this._rgb; }

  /**
   * Set all values according the the items in color
   * @param { RGB } - red, green or blue could be defined
   */
  set( color?: RGB ): boolean {
    if (!color) return false;

    // update the colors if they exist and are valid:

    // - Red
    if (color['red'] && validColorValue(color['red'], '255')){
      this._rgb.red = color['red'];
      console.info('Updated red:', this._rgb);
    }

    // - Green
    if (color['green'] && validColorValue(color['green'], '255') ){
      this._rgb.green = color['green'];
      console.info('Updated green:', this._rgb);
    }

    // - Blue
    if (color['blue'] && validColorValue(color['blue'], '255')){
      this._rgb.blue = color['blue'];
      console.info('Updated blue:', this._rgb);
    }

    return true;
  }

  /**
   * Get/Set Red
   * @return - value of red after get or set operation
   */
  red(set?: number): number {
    if (set !== undefined) this.set({'red': set});
    return this._rgb.red;
  }

  /**
   * Get/Set Green
   * @return - value of green after get or set operation
   */
  green(set?: number): number {
    if (set !== undefined) this.set({'green': set});
    return this._rgb.green;
  }

  /**
   * Get/Set Blue
   * @return - value of blue after get or set operation
   */
  blue(set?: number): number {
    if (set !== undefined) this.set({'blue': set});
    return this._rgb.blue;
  }

  /**
   * Converts the Color into a usable CSS string
   */
  toString(): string {
    return ['rgb(',
      this.red ,',',
      this.green, ',',
      this.blue, ')'].join('');
  }


// --------------------------------------------------
// STATIC METHODS
// --------------------------------------------------

  /**
   * @convenience
   * Creates a Color in RGB-mode w/ any input
   */
  static rgb(input: any): Color {
    if (typeof input === "string") { return Color.rgbString(input); }
    if (typeof input === "array") { return Color.rgbArray(input); }
    if (typeof input === "object") {
      return new Color({
        red: (<number>input['red']) || 0,
        green: (<number>input['green']) || 0,
        blue: (<number>input['blue']) || 0
      });
    }
    return null;
  }

  /**
   * Creates RGB-mode Color w/ string input
   */
  static rgbString(input: string): Color {
    input = input.replace('rgb', '');
    input = input.replace('(', '');
    input = input.replace(')', '');
    input = input.replace(' ', '');
    let rgbValues = input.split(',');
    return new Color({
      red: parseInt(input[0]),
      green: parseInt(input[1]),
      blue: parseInt(input[2])
    });
  }

  /**
   * Creates RGB-mode Color w/ array input
   * @param { string[] | number[] } - must be 3 in length
   */
  static rgbArray(input: any[]): Color {
    if (input.length !== 3) return null;
    return new Color({
      red: (typeof input[0] === 'string') ? parseInt(input[0]) : input[0],
      green: (typeof input[1] === 'string') ? parseInt(input[1]) : input[1],
      blue: (typeof input[2] === 'string') ? parseInt(input[2]) : input[2]
    });
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
