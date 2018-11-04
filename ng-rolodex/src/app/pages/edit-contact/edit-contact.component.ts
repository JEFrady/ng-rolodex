import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})

export class EditContactComponent {

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

  constructor(
    private backend: BackendService,
    private _router: Router,
    private _route: ActivatedRoute
    ) {

  }

  ngOnInit() {
    let email = this._route.snapshot.params.id
    this.contacts = this.backend.contacts;
    let contact = this.contacts.filter( element => {
      return element.email === email
    })
    this.formData.name = contact[0].name
    this.formData.address = contact[0].address
    this.formData.primary_phone = contact[0].primary_phone
    this.formData.alt_phone = contact[0].alt_phone
    this.formData.email = contact[0].email
    this.formData.twitter = contact[0].twitter
    this.formData.instagram = contact[0].instagram
    this.formData.github = contact[0].github
    console.log('para', this.formData)
    
    
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

  update () {
      console.log(this.formData)
  }
}
