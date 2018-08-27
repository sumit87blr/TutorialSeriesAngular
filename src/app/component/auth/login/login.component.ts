import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authsrv: AuthService, private router: Router) { }

  ngOnInit() {
    this.authsrv.getauthListner().subscribe((data) => {
      console.log('value', data);
      if (data) {

        this.router.navigate(['/employees']);
      }
    });
  }

  onlogin(loginform: NgForm) {
    // To Do
    // Api call for authenticating user
    // And let's say you recieve the user details on successfully authenticated
    this.authsrv.autenticateUser(loginform.value.emailId, loginform.value.password);

  }

}
