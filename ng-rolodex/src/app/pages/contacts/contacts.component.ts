import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ContactCardComponent } from 'src/app/shared/contact-card/contact-card.component'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
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
}
