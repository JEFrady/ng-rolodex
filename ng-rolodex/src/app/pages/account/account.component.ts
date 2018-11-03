import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  constructor(
    private router: Router,
    private auth: AuthService,
    private session: SessionService
  ) { }

  ngOnInit() {
  }

  logout() {
    return this.auth.logout();
}

}
