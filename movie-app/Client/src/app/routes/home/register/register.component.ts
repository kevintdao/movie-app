import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { catchError } from 'rxjs';
import { AlertType } from 'src/app/services/types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  message = '';
  type?: AlertType = undefined;

  form = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.message = '';
    this.type = undefined;

    if (this.form.invalid) {
      return;
    }

    this.authService
      .register(
        this.form.value.username as string,
        this.form.value.password as string,
        this.form.value.confirmPassword as string
      )
      .pipe(
        catchError((err: any) => {
          this.message = err.error;
          this.type = 'error';
          return [];
        })
      )
      .subscribe((response) => {
        this.router.navigate(['/login']);
      });
  }
}
