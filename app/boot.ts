import { platformBrowserDynamic }     from '@angular/platform-browser-dynamic';
import { CoreModule }                 from '@palette/core';

const platform = platformBrowserDynamic();

platform.bootstrapModule( CoreModule );
