System.register(['angular2/core', './color-display.component', './color-input.component', './color.service'], function(exports_1, context_1) {
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
    var core_1, color_display_component_1, color_input_component_1, color_service_1;
    var Palette;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (color_display_component_1_1) {
                color_display_component_1 = color_display_component_1_1;
            },
            function (color_input_component_1_1) {
                color_input_component_1 = color_input_component_1_1;
            },
            function (color_service_1_1) {
                color_service_1 = color_service_1_1;
            }],
        execute: function() {
            Palette = (function () {
                function Palette(colorService) {
                    var _this = this;
                    this.colorService = colorService;
                    this.currentColor = '#b23b23';
                    colorService.setColor$.subscribe(function (color) {
                        _this.currentColor = color;
                        console.log('currentColor set:', color);
                    });
                    colorService.setColor('#1ce');
                    colorService.setColor('#b23b23');
                }
                Palette = __decorate([
                    core_1.Component({
                        selector: 'palette',
                        template: "\n\t\t<h1>Palette</h1>\n\t\t<color-display [color]=\"currentColor\"></color-display>\n\t\t<color-input [color]=\"currentColor\"></color-input>\n\t\t",
                        directives: [color_display_component_1.ColorDisplay, color_input_component_1.ColorInput],
                        styles: ["\n\t\tcolor-display,\n\t\tcolor-input {\n\t\t\tdisplay: block;\n\t\t}\n\t"],
                        providers: [color_service_1.ColorService]
                    }), 
                    __metadata('design:paramtypes', [color_service_1.ColorService])
                ], Palette);
                return Palette;
            }());
            exports_1("Palette", Palette);
        }
    }
});
//# sourceMappingURL=palette.component.js.map