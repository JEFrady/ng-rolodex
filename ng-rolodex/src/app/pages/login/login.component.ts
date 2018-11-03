import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormData = {
    username: '',
    password: ''
  }
  constructor(private auth: AuthService) {}

  login() {
      this.auth.login(this.loginFormData)
      .then( () => {
          console.log('User logged in')
      })
      .catch( (err) => {
          console.log(err);
      })
  }

  ngOnInit() {}
}
