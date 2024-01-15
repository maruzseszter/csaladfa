import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person/person.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {

  persons: Person[] = [];
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }
deletePerson(id: string){
  this.personService.deletePerson(id);
}
}
