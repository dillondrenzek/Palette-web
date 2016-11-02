import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subscriber } from 'rxjs/Rx';

@Injectable()
export class MetaService {

  constructor(private http: Http) {}

  getAppVersion(): Observable<string> {
    return Observable.create(( obs: Subscriber<string> ) => {
      this.http.get('/meta/version').map((res: Response) => {
        return res.json();
      }).subscribe((data: {version: string}) => {
        obs.next(data.version);
        obs.complete();
      });
    });
  }

}
