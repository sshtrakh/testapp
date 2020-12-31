import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-account-details-settings',
  templateUrl: './account-details-settings.component.html',
  styleUrls: ['./account-details-settings.component.scss']
})
export class AccountDetailsSettingsComponent implements OnInit {
  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(),
      desktop: new FormControl(),
      sms: new FormControl(),
    });
  }

  onSubmit(): void {

    alert('Saved!');
  }
}
