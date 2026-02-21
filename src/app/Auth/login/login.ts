import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  MinLengthValidator,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.myForm = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  errorMap = [
    {
      match: 'Username',
      field: 'username',
      key: 'apiError',
    },
    {
      match: 'Already Login',
      field: 'username',
      key: 'apiError',
    },
    {
      match: 'locked',
      field: 'password',
      key: 'apiError',
    },
    {
      match: 'Invalid',
      field: 'password',
      key: 'apiError',
    },
  ];

  getErrorMessage(controlName: string) {
    const control = this.myForm.get(controlName);

    if (!control || !control.touched) return '';

    if (control.hasError('required'))
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1).toLowerCase()} is required`;

    if (control.hasError('apiError')) return control.getError('apiError');

    return '';
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const formData = {
      user_name: this.myForm.value.username,
      user_pass: this.myForm.value.password,
    };

    this.http.post('http://localhost:5266/api/login/login', formData).subscribe({
      next: (res: any) => {
        if (res.code === -1) {
          this.handleBackendError(res.message);
        } else {
          alert("You're login Successully");
        }
      },
    });
  }

  private handleBackendError(message: string) {
    const error = this.errorMap.find((e) => message.toLowerCase().includes(e.match.toLowerCase()));

    if (error) {
      this.myForm.get(error.field)?.setErrors({
        [error.key]: message,
      });
    }
  }

  // formControl: string = 'form-control';
  // placeholder1 = 'Username';
}
