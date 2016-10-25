import { Component } from '@angular/core';

import { Color, RGB } from '@palette/color';

@Component({
  selector: 'main-body',
  moduleId: module.id,
  templateUrl: './mainBody.html',
  styleUrls: ['./mainBody.css']
})
export class MainBody {

  color: Color = new Color({
    red: 255,
    green: 200,
    blue: 54
  });

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
    console.info('colorChanged(',c,')')
    this.color = c;
  }

}
