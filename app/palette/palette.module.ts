import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ColorModule } from '@palette/color';

import { PaletteComponent } from './paletteComponent/palette.component';

@NgModule({
  imports: [
    CommonModule,
    ColorModule
  ],
  declarations: [
    PaletteComponent
  ],
  exports: [
    PaletteComponent
  ]
})
export class PaletteModule {}
