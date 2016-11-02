import { Component } from '@angular/core';

import { Color, RGB, stringToRGB } from '@palette/color';

@Component({
  selector: 'main-body',
  moduleId: module.id,
  templateUrl: './mainBody.html',
  styleUrls: ['./mainBody.css']
})
export class MainBody {

  // Locally saved `Color`s
  savedColors: Color[] = [];

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

  ngOnInit() {
    this.color = new Color({
      red: 255,
      green: 255,
      blue: 245
    });
  }
}
