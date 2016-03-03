System.register(['angular2/platform/browser', './palette-app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, palette_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (palette_app_component_1_1) {
                palette_app_component_1 = palette_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(palette_app_component_1.PaletteApp);
        }
    }
});
//# sourceMappingURL=main.js.map