import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  message: string = "";
  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.email]),
  });
  
  constructor() {
    console.log(this.registrationForm);    
  }

  onSubmit() {
    console.log(this.registrationForm);
    this.registrationForm.markAllAsTouched()

    if (this.registrationForm.status === "VALID") {
      this.message = "Form submitted successfully. Thank you!";
      console.log(`Submitting ${this.registrationForm.value.name} and ${this.registrationForm.value.email}`);
    }
  }
}
