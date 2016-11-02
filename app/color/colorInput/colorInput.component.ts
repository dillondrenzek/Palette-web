import { Component, Input, Output, EventEmitter, HostBinding, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { Color } from '../Color';
import { RGB } from '../interfaces';

// import { colorInputProvider } from './provider';

interface FormValue {
  fc1: number,
  fc2: number,
  fc3: number
}

interface ColorComponent {
  label: string,
  name: string
}

@Component({
  selector: 'color-input',
  templateUrl: './colorInput.html',
  styleUrls: ['./colorInput.css'],
  moduleId: module.id
})
export class ColorInputComponent {

  // ColorInputComponent
  constructor() {
    this.form = new FormGroup({
      red: new FormControl(''),
      green: new FormControl(''),
      blue: new FormControl('')
    });
  }

  // form - HTML Form Model
  form: FormGroup;

  @Input() color: Color = new Color();

  // colorMode - a string that determines which inputs to show
  @Input() colorMode: string = 'rgb';

  private colorComponents: ColorComponent[] = [];

  // colorChange - event emitted when form value changes
  @Output() colorChange = new EventEmitter<Color>();

  private onColorModeInput() {
    if (this.colorMode) {
      this.colorComponents = [];
      // split color mode into characters
      this.colorMode.split('').forEach((el: string) => {
        this.colorComponents.push(this.getColorComponent(el));
      });

    }
  }

  private getColorComponent(colorChar: string): ColorComponent {
    switch (colorChar) {
      case 'r':
        return {
          label: 'R',
          name: 'red'
        };
      case 'g':
        return {
          label: 'G',
          name: 'green'
        };
      case 'b':
        return {
          label: 'B',
          name: 'blue'
        };
      default: return null;
    }
  }


  private onColorInput() {
    if (this.color) this.setFormColor(this.color);
  }

  private setFormColor(color: Color) {
    this.form.setValue({
      red: this.color.red || null,
      green: this.color.green || null,
      blue: this.color.blue || null
    });
  }

  private getFormColor(): Color {
    return new Color(this.form.value);
  }

  ngOnInit() {

    // Subscribe form value
    this.form.valueChanges.subscribe((value: FormValue) => {
      this.color = this.getFormColor();
      this.colorChange.emit(this.color);
    });
  }

  ngOnChanges(change: any) {
    if (change.color) { this.onColorInput(); }
    if (change.colorMode) { this.onColorModeInput(); }
  }
}
