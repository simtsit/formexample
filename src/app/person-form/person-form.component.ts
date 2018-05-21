import { Component, OnInit } from '@angular/core';

import { Person } from '../person.model';

@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

	model = new Person('John', 'Doe', 'jon@doe.com','KA' );

  constructor() { }

  ngOnInit() {
  }

  	// Uncomment this if you want to show the Person model to the screen
  	//
	// get currentPerson() {
	// 	return JSON.stringify(this.model); 
	// }

	showPerson(event){
		console.log(this.model);
	}

}
