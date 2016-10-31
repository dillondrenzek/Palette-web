import { Component, Input, Output, EventEmitter, HostBinding, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { Color } from '../Color';
import { RGB } from '../interfaces';

// import { colorInputProvider } from './provider';

@Component({
  selector: 'color-input',
  templateUrl: './colorInput.html',
  styleUrls: ['./colorInput.css'],
  moduleId: module.id
})
export class ColorInputComponent {

  @HostBinding('style.backgroundColor') background: string;

  form: FormGroup;

  // Private color reference
  private _color: Color = new Color();

  @Input()
  set color(c: Color) {
    if (c) {
      this._color = c;
      if (c.toRGB) {
        this.form.setValue(c.toRGB());
      }
    }
  }
  get color(): Color { return this._color; }

  @Output() onChange = new EventEmitter<Color>();

  constructor() {
    this.form = new FormGroup({
      red: new FormControl(''),
      green: new FormControl(''),
      blue: new FormControl('')
    });

    this.form.valueChanges.subscribe((value: Color) => {
      console.info('ColorInput value change:', value);
      this.onChange.emit(new Color(value));
    });
  }
}
