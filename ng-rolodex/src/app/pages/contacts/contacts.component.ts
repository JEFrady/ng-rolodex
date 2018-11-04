import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  title: string='All contacts';
  // subtitle: string;
  contacts: any[];

  constructor(private backend: BackendService) {
    this.contacts = this.backend.contacts;
    // const subtitle: string = 'This is a subtitle';
    // this.subtitle = subtitle;
   }

  ngOnInit() {
    this.contacts = this.backend.contacts;
  }

  delete(email) {
    this.backend.removeContact(email)
  }

  edit(email) {
    this.backend.editContact(email)
    
  }
}
