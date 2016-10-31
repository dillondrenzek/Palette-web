import { Component } from '@angular/core';

import { Color, RGB, toHexString } from '@palette/color';

@Component({
  selector: 'main-body',
  moduleId: module.id,
  templateUrl: './mainBody.html',
  styleUrls: ['./mainBody.css']
})
export class MainBody {

  savedColors: Color[] = [];

  color: Color;

  get hexColor(): string {
    return toHexString(this.color);
  }

  get backgroundColor(): string {
    let str = [0,0,0];

    if (this.color) {
      str[0] = this.color.red;
      str[1] = this.color.green;
      str[2] = this.color.blue;
    }

    return ["rgb(", str[0], ',', str[1], ',', str[2], ")"].join('');
  }

  colorChanged(c: Color) {
    console.info('colorChanged(',c,')');
    this.color = c;
  }

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
