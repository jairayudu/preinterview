import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {}
  title = 'taskmanager';
  userRole: string = '';
  role: string = '';
  ngOnInit(): void {
    this.loginService.userRole.subscribe((res) => {
      this.userRole = res;
      console.log(this.userRole);
    });
    this.role = this._route.snapshot.params[''];
    const storedData = localStorage.getItem('userRole');
    if (storedData) {
      this.userRole = JSON.parse(storedData);
      console.log(this.userRole);
    }
  }
}
