System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ColorDisplay;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ColorDisplay = (function () {
                function ColorDisplay() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ColorDisplay.prototype, "color", void 0);
                ColorDisplay = __decorate([
                    core_1.Component({
                        selector: 'color-display',
                        template: "\n\t\t<div [style.backgroundColor]=\"color\">\n\t\t</div>\n\t",
                        styles: ["\n\t\tdiv {\n\t\t\theight: 150px;\n\t\t\twidth: 150px;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ColorDisplay);
                return ColorDisplay;
            }());
            exports_1("ColorDisplay", ColorDisplay);
        }
    }
});
//# sourceMappingURL=color-display.component.js.map