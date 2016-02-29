import { Component, Input, EventEmitter, OnDestroy } from 'angular2/core';
import { ColorService } from './color.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'color-input',
	template: `
	<div>
		<input #box type="text" name="color" (keyup.enter)="submitColor(box.value)" value="{{color}}">
	</div>
	`,
	styles: [``]
})

export class ColorInput implements OnDestroy {
	@Input() color: string;
	subscription: Subscription;

	constructor(private colorService: ColorService) {
		this.subscription = colorService.setColor$.subscribe(
			color => {
				this.color = color;
			}
		)
	}

	submitColor(color:string){
		this.colorService.setColor(color);
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
}
