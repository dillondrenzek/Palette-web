import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,
  ReactiveFormsModule } from '@angular/forms';

import { ColorComponent } from './component/color.component';
import { ColorInputComponent } from './colorInput/colorInput.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ColorComponent,
    ColorInputComponent
  ],
  exports: [
    ColorComponent,
    ColorInputComponent
  ]
})
export class ColorModule {}
