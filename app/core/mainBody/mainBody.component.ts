import { Component } from '@angular/core';

import { Color, RGB, stringToRGB } from '@palette/color';
import { Palette } from '@palette/palette';
import { randomColor } from '@palette/generators';



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
    ]),
    new Palette([
      new Color('rgb(205,20,4)'),
      new Color('rgb(87,183,47)'),
      new Color('rgb(61,133,136)')
    ])
  ];

  // `Color` currently displaying in the form
  color: Color;

  // Event for when a color is selected in the list
  selectColor(color: Color) {
    this.color = color;
  }

  selectPalette(palette: Palette) {
    this.savedColors = palette.colors;
  }

  /**
   * `ColorEditor` color change event
   */
  editorColorChange(color: Color) {
    this.color = color;
  }

  /**
   * `ColorEditor` color save event
   */
  editorColorSave(color: Color) {
    this.savedColors.push(color);
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
