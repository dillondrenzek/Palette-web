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
                    this.subscription = colorService.setColor$.subscribe(function (color) {
                        _this.color = color;
                    });
                }
                ColorInput.prototype.submitColor = function (color) {
                    this.colorService.setColor(color);
                };
                ColorInput.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ColorInput.prototype, "color", void 0);
                ColorInput = __decorate([
                    core_1.Component({
                        selector: 'color-input',
                        template: "\n\t<div>\n\t\t<input #box type=\"text\" name=\"color\" (keyup.enter)=\"submitColor(box.value)\" value=\"{{color}}\">\n\t</div>\n\t",
                        styles: [""]
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