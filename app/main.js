System.register(['angular2/platform/browser', './palette.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, palette_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (palette_component_1_1) {
                palette_component_1 = palette_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(palette_component_1.Palette);
        }
    }
});
//# sourceMappingURL=main.js.map