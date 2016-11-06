import { Component } from '@angular/core';

import { Color, RGB, stringToRGB } from '@palette/color';
import { Palette } from '@palette/palette';



@Component({
  selector: 'main-body',
  moduleId: module.id,
  templateUrl: './mainBody.html',
  styleUrls: ['./mainBody.css']
})
export class MainBody {

  // Locally saved `Color`s
  savedColors: Color[] = [
    new Color('rgb(82,133,161)'),
    new Color('rgb(136,14,143)'),
    new Color('rgb(246,73,79)'),
    new Color('rgb(252,131,77)'),
    new Color('rgb(255,200,54)')
  ];

  savedPalettes: Palette[] = [
    new Palette([
      new Color('rgb(82,133,161)'),
      new Color('rgb(136,14,143)'),
      new Color('rgb(246,73,79)'),
      new Color('rgb(252,131,77)'),
      new Color('rgb(255,200,54)')
    ])
  ];

  // `Color` currently displaying in the form
  color: Color;

  // template method for coloring the swatch's background
  get swatchBackground(): string {
    return this.color.toRgbString();
  }

  // Event for when a color is selected in the list
  selectColor(color: Color) {
    this.color = color;
  }

  selectPalette(palette: Palette) {
    this.savedColors = palette.colors;
  }

  // Event when the color inputs value changes
  colorChanged(c: Color) {
    console.info('colorChanged(',c,')');
    this.color = c;
  }

  // Event when the save button is clicked
  onSave() {
    console.info('onSave(', this.color,')');
    this.savedColors.push(this.color);
  }

  onSavePalette() {
    let palette = new Palette(this.savedColors.slice());
    this.savedPalettes.push(palette);
  }

  onClearPalettes() {
    this.savedPalettes = [];
  }

  onClear() {
    this.savedColors = [];
  }

  ngOnInit() {
    this.color = new Color({
      red: 255,
      green: 255,
      blue: 245
    });
  }
}
