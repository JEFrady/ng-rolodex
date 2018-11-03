import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent {
  contacts: any[];
  
  formData: {
    name: string,
    address: string,
    primary_phone: string,
    alt_phone: string,
    email: string,
    twitter: string,
    instagram: string,
    github: string
  } = {
      name: '',
      address: '',
      primary_phone: '',
      alt_phone: '',
      email: '',
      twitter: '',
      instagram: '',
      github: ''
  }

  validName: boolean = false;
  validEmail: boolean = false;

  constructor(private backend: BackendService) {

  }

  ngOnInit() {
    this.contacts = this.backend.contacts;
    console.log(this.contacts)
  }


  validateName() {
      if (!this.formData.name) {
          this.validName = false;
      }
      else if  (this.formData.name.length < 3) {
          this.validName = false;
      }
      else {
          this.validName = true;
      }
  }

  validateEmail () {
      if (!this.formData.email) {
          this.validEmail = false;
      }
      else if (!this.formData.email.includes('@')) {
          this.validEmail = false;
      }
      else if (this.formData.email.length < 3 ) {
          this.validEmail = false;
      }
      else {
          this.validEmail = true;
      }
  }
  isDisabled () {
      return !this.validName || !this.validEmail;

  }    

  submit () {
      console.log(this.formData)
      this.contacts.push(this.formData);
      console.log(this.contacts)
  }

}
