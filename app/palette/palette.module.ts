import { NgModule, forwardRef } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ColorModule } from '../color/color.module';

import { PaletteComponent } from './paletteComponent/palette.component';

@NgModule({
  imports: [
    CommonModule,
    forwardRef(() => ColorModule)
  ],
  declarations: [
    PaletteComponent
  ],
  exports: [
    PaletteComponent
  ]
})
export class PaletteModule {}
