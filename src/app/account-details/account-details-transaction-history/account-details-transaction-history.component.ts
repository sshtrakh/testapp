import { Component, OnInit } from '@angular/core';
import {TransactionInterface} from './transaction.interface';

@Component({
  selector: 'app-account-details-transaction-history',
  templateUrl: './account-details-transaction-history.component.html',
  styleUrls: ['./account-details-transaction-history.component.scss']
})
export class AccountDetailsTransactionHistoryComponent implements OnInit {

  displayedColumns: string[] = ['date', 'amount', 'currency'];
  transactions: TransactionInterface[] = [
    { date: new Date(2020, 11, 4), amount: 100, currency: 'USD'},
    { date: new Date(2020, 10, 25), amount: 200.26, currency: 'USD'},
    { date: new Date(2020, 9, 14), amount: 146.5, currency: 'USD'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
