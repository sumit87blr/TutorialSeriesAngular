import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isAuthenticated = false;
  username: string;
  constructor(private authsrv: AuthService) { }

  ngOnInit() {
    this.authsrv.getauthListner().subscribe((data) => {
      this.isAuthenticated = data;
    });
    this.authsrv.getAuthenicatedUserListner().subscribe((userdata) => {
      this.username = userdata.firstname + ' ' + userdata.lastname;
    });

  }

}
