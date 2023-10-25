import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private loginservice: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }
  login() {
    this.http.get<any>('http://localhost:3000/signupUsers').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user.role === 'admin') {
          alert('Login Success');
          this.loginForm.reset();
          this.loginservice.userRole.next('admin');
          localStorage.setItem('userRole', user.role);
          this.router.navigate(['quiz']);
        } else if (user.role === 'user') {
          alert('Login Success');
          this.loginForm.reset();
          this.loginservice.userRole.next('user');
          localStorage.setItem('userRole', user.role);
          this.router.navigate(['viewquiz']);
        } else {
          alert('user not found');
        }
      },
      (err) => {
        alert('something went wrong!');
      }
    );
  }
}
