System.register(['angular2/core', './color.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, color_service_1;
    var ColorInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (color_service_1_1) {
                color_service_1 = color_service_1_1;
            }],
        execute: function() {
            ColorInput = (function () {
                function ColorInput(colorService) {
                    var _this = this;
                    this.colorService = colorService;
                    colorService.setColor$.subscribe(function (color) {
                        _this.color = color;
                    });
                }
                ColorInput.prototype.submitColor = function (color) {
                    if (color[0] !== '#') {
                        color = '#'.concat(color);
                    }
                    this.colorService.setColor(color);
                };
                ColorInput.prototype.ngOnDestroy = function () { };
                ColorInput = __decorate([
                    core_1.Component({
                        selector: 'color-input',
                        template: "\n\t<div>\n\t\t<input #box type=\"text\" name=\"color\" (keyup.enter)=\"submitColor(box.value)\" value=\"{{color}}\">\n\t</div>\n\t",
                        styles: ["\n\t\tinput[type=\"text\"] {\n\t\t\tdisplay: block;\n\t\t\tmargin: 0 auto;\n\t\t\twidth: 100%;\n\t\t\tfont-family: sans-serif;\n\t\t\tfont-size: 3rem;\n\t\t\tappearance: none;\n\t\t\tbox-shadow: none;\n\t\t\tborder-radius: none;\n\t\t\tborder: none;\n\t\t\tborder-bottom: 2px solid #eaeaea;\n\t\t\ttext-align: center;\n\t\t\tfont-style: bold;\n\t\t\tcolor: white;\n\t\t\tbackground: none !important;\n\t\t\toutline: none;\n\t\t\ttext-transform: uppercase;\n\t\t}\n\n\t\tinput:-webkit-autofill {\n\t\t\tbackground-color: none;\n\t\t}\n\n\t\tinput[type=\"text\"]:focus {\n\t\t\tbackground: none;\n\t\t}\n\t\t"]
                    }), 
                    __metadata('design:paramtypes', [color_service_1.ColorService])
                ], ColorInput);
                return ColorInput;
            }());
            exports_1("ColorInput", ColorInput);
        }
    }
});
//# sourceMappingURL=color-input.component.js.map