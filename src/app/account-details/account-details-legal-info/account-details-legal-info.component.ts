import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-details-legal-info',
  templateUrl: './account-details-legal-info.component.html',
  styleUrls: ['./account-details-legal-info.component.scss']
})
export class AccountDetailsLegalInfoComponent implements OnInit {

  passportNumber = '48753786';

  constructor() { }

  ngOnInit(): void {
  }

}
