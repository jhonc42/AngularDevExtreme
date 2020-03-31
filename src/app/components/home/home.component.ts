import { Component, OnInit } from '@angular/core';
import { Employee, PersonService } from '../../services/person.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employee: Employee;
	positions: string[];
	states: string[];
  constructor(personService: PersonService) { 
    this.employee = personService.getEmployee();
		this.positions = personService.getPositions();
		this.states = personService.getStates();
  }

  ngOnInit(): void {
  }

}
