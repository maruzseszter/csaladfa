import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { PersonService  } from '../person/person.service';
import { Person } from '../models/person';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  personForm: FormGroup = new FormGroup ({});

  constructor(private formBuilder: FormBuilder) {
      
   }
  // constructor(
  //   private formBuilder: FormBuilder,
  //   private personService: PersonService,
  //   private router: Router,
  //   private route: ActivatedRoute
  // ) { }

  

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
   }

  onSubmit() {
    if (this.personForm.valid) {
      console.log("valid")
    }
  }




      
      // const newPerson: Person = this.personForm.value;

      // this.personService.addPerson(newPerson)
      //   .then(() => {
      //     this.router.navigate(['/list']);
      //   })
      //   .catch((error) => {
      //     console.error('Hiba történt:', error);
      //   });
  }
