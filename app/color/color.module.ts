import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorComponent } from './component/color.component';
import { ColorInputComponent } from './colorInput/colorInput.component';

@NgModule({
  imports: [
    CommonModule
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
