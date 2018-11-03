import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { FilterPipe } from 'src/app/filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string='Search for a contact';
  contacts: any[];
  searchText: string;

  constructor(private backend: BackendService) {
   }

  ngOnInit() {
    this.contacts = this.backend.contacts;

  }


}


