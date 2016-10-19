import { Component } from '@angular/core';

import { Color } from '@palette/color';

@Component({
  selector: 'main-body',
  moduleId: module.id,
  templateUrl: './mainBody.html',
  styleUrls: ['./mainBody.css']
})
export class MainBody {

  color: Color;

  ngOnInit() {
    this.color = new Color({
      red: 23,
      green: 132,
      blue: 56
    });
  }

}
