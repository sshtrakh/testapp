import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-customer-details-todo-list',
  templateUrl: './customer-details-todo-list.component.html',
  styleUrls: ['./customer-details-todo-list.component.scss']
})
export class CustomerDetailsTodoListComponent implements OnInit {
  todos: string[] = ['Celebrate New Year', 'Sing SoftKitty', 'Buy new iphone', 'Plant a tree', 'Build a robot'];

  constructor() {
  }

  ngOnInit(): void {
  }
}
