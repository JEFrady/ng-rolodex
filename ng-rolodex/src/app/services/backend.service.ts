import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ContactsComponent } from '../pages/contacts/contacts.component';

type contactsArray = Array<{ name: string, address: string, primary_phone: string, alt_phone: string, email: string, twitter: string, instagram: string, github: string}>

type usersArray = Array<{ username: string, password: string, name: string, email: string, address: string}>

@Injectable({
    providedIn: 'root'
}) 


export class BackendService{
    
    baseUrl: string = 'https://swapi.co/api/';
    contacts: contactsArray = [
              { name: 'Abby', address: '123 Rainbow Lane.', primary_phone: '222-222-2222', alt_phone: null, email: 'contact@user.com', twitter: '@contact1', instagram: '@contact1', github: 'CONtact1'},
              { name: 'Bob', address: '123 Rainbow Lane.', primary_phone: '222-222-2222', alt_phone: null, email: 'contact2@user.com', twitter: '@contact2', instagram: '@contact2', github: 'CONtact2'},
              { name: 'Carl', address: '123 Rainbow Lane.', primary_phone: '222-222-2222', alt_phone: null, email: 'contact3@user.com', twitter: '@contact3', instagram: '@contact3', github: 'CONtact3'},
              { name: 'Dave', address: '123 Rainbow Lane.', primary_phone: '222-222-2222', alt_phone: null, email: 'contact4@user.com', twitter: '@contact4', instagram: '@contact4', github: 'CONtact4'}
    ];
    users: usersArray = [
        { username: 'Sara4ever', password: 'password', name: 'Sarah', email: 'sarah@email.com', address: '123 Snow Lane, Bigfork, MT, 59901'},
        { username: 'AbstractName', password: 'password', name: 'CJ', email: 'charles@email.com', address: '123 Mountain Drive, Seattle, WA, 98101'},
        { username: 'BetterFindBen', password: 'password', name: 'Ben', email: 'ben@email.com', address: '123 Basic Street, Honolulu, HI, 96818'},
    ]

    constructor(private http: HttpClient) {

    }
    getContact(id: number) {
        const url = this.baseUrl + 'people/' + id;
        return this.http.get(url).toPromise();
    }

    addContact(contact) {
        this.contacts.push(contact)
    }

    removeContact(email) {
        console.log(email)
    }

    register(data) {
        return Promise.resolve({});
    }

    login(data) {
        return Promise.resolve({ username: data.username })
    }

    logout() {
        return Promise.resolve({});
    }

}