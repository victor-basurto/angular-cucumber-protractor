import { Component } from '@angular/core';

export interface IUserData {
	id: number;
	name: string;
	lastname: string;
	email: string;
}

const UserDataArr: IUserData[] = [
	{ id: 1,name: 'mark', lastname: 'coventry', email: 'em@sw.com' },
	{ id: 2,name: 'jesus', lastname: 'theman', email: 'sm@sw.com' },
	{ id: 3,name: 'mary', lastname: 'thevirgin', email: 'rm@sw.com' },
	{ id: 4,name: 'joseph', lastname: 'something', email: 'asdfa@sw.com' },
	{ id: 5,name: 'lazaruz', lastname: 'something too', email: 'eass@sw.com' },
	{ id: 6,name: 'Clark', lastname: 'Kent', email: 'ssssf@sw.com' }
] 

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title: string = 'cucumber-app';
	increment: number = 0;

	displayColumns: string[] = ['id','name', 'lastname', 'email'];
	tableDataArr: IUserData[] = UserDataArr;


	incrementValue(): void {
		this.increment += 1;
		console.log(this.increment)
	}
}
