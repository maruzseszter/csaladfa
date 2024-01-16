import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { PersonService } from '../person/person.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[] = [];

  constructor(private personService: PersonService, private router: Router) {} 

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }

  deletePerson(id: string) {
    this.personService.deletePerson(id);
  }

  navigateToHomePage() {
    this.router.navigate(['/']);
  }
}
