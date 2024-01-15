import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})

export class PersonService {
  private persons: Person[] = [];

  constructor() {
    let savedPersons = localStorage.getItem("persons");
    this.persons = savedPersons ? JSON.parse(savedPersons) : [];
  }

  //C R U D

  getPersons(): Person[] {
    return this.persons;
  }

  getPerson(id: string): Person | undefined {
    return this.persons.find(per => per.id === id);
  }

  addPerson(person: Person): void {

    person.id = Date.now().toString();

    this.persons.push(person);
    localStorage.setItem("persons", JSON.stringify(this.persons));
  }

  deletePerson(id: string): void {
    let index = this.persons.findIndex(per => per.id === id);
    this.persons.splice(index, 1)
    localStorage.setItem("persons", JSON.stringify(this.persons));
  }

  updatePerson(id: string, updatedPerson: Person): void {
    let index = this.persons.findIndex(per => per.id === id);
    this.persons[index] = updatedPerson;
    localStorage.setItem("persons", JSON.stringify(this.persons));
  }
  
}
