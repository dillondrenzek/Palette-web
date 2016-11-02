import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,
  ReactiveFormsModule } from '@angular/forms';

import { ColorInputComponent } from './colorInput/colorInput.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ColorInputComponent
  ],
  exports: [
    ColorInputComponent
  ]
})
export class ColorModule {}
