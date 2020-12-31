import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details-header',
  templateUrl: './customer-details-header.component.html',
  styleUrls: ['./customer-details-header.component.scss']
})
export class CustomerDetailsHeaderComponent implements OnInit {

  firstName = 'Larisa';
  lastName = 'Genadievna';

  constructor() { }

  ngOnInit(): void {
  }

}
