import { Injectable } from 'angular2/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class ColorService {

	// Observable string sources
	private _colorSetSource = new Subject<string>();

	// Observable string streams
	setColor$ = this._colorSetSource.asObservable();

	setColor(color: string){
		this._colorSetSource.next(color);
	}
}
