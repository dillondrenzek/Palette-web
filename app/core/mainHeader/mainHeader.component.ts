import { Component } from '@angular/core';
import { MetaService } from '../metaService/meta.service';

@Component({
  selector: 'main-header',
  moduleId: module.id,
  templateUrl: './mainHeader.html',
  styleUrls: ['./mainHeader.css']
})
export class MainHeader {

  version: string = '';

  constructor( private metaService: MetaService ) {}

  ngOnInit() {
    this.metaService.getAppVersion().subscribe((version: string) => {
      this.version = version;
    });
  }
}
