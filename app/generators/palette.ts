import { Color } from '@palette/color';
import { Palette } from '@palette/palette';

import { randomColor } from './color';

export function shadesPalette(inputColor: Color, numToGen: number): Palette {
  return new Palette([
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor()
  ]);
}
