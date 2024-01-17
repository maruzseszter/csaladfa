import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../person/person.service';
import { Person } from '../models/person';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  personForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      nev: ['', Validators.required],
      szul_datum: ['', Validators.required],
      szul_hely: ['', Validators.required],
      anyja_neve: ['', Validators.required],
      apja_neve: ['', Validators.required],
      halal_datum: [''],
      halal_helye: ['']
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id')
    if (id) {
      let person = this.personService.getPerson(id)

      if (person)
        this.personForm.patchValue(person)
    }
  }

  onSubmit() {
    if (this.personForm.valid) {
      let person: Person = this.personForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id')
      if (id) {
        //update
        this.personService.updatePerson(id, person)
      } else {
        //new
        this.personService.addPerson(person)
      }

      this.router.navigate(['/list'])


    }
  }

}

