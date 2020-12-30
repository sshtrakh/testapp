import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav: MatSidenav;
  links: { path: string, title: string }[] = [
    // {path: '../', title: 'Main'},
    {path: './customer-details', title: 'Customer'},
    {path: './account-details', title: 'Account'},
    {path: './form', title: 'Form' },
    {path: './buttons', title: 'Buttons'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.sidenav.toggle();
  }
}
