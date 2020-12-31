import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details-contacts',
  templateUrl: './customer-details-contacts.component.html',
  styleUrls: ['./customer-details-contacts.component.scss']
})
export class CustomerDetailsContactsComponent implements OnInit {

  phoneNumber = '+ 972 54 678 789 8';
  email = 'lariska@gmail.com';

  constructor() { }

  ngOnInit(): void {
  }

}
