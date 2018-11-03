import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  contacts: any[];

  constructor(private backend: BackendService) {

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
