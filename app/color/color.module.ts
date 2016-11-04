import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,
  ReactiveFormsModule } from '@angular/forms';

import { ColorInputComponent } from './colorInput/colorInput.component';
import { ColorSwatch } from './colorSwatch/colorSwatch.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ColorInputComponent,
    ColorSwatch
  ],
  exports: [
    ColorInputComponent,
    ColorSwatch
  ]
})
export class ColorModule {}
