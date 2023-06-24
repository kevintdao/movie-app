import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.email]],
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.form.value);

    if (this.form.invalid) {
      return;
    }
  }
}
