import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {

  form1 = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16)
    ]),
    country: new FormControl('', Validators.required),

    // NEW
    gender: new FormControl('', Validators.required),
    terms: new FormControl(false, Validators.requiredTrue)
  });

  onSubmit() {
    console.log(this.form1.value);
  }
}