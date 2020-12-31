import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-account-details-support',
  templateUrl: './account-details-support.component.html',
  styleUrls: ['./account-details-support.component.scss']
})
export class AccountDetailsSupportComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(),
      comment: new FormControl(),
    });
  }

  onSave(): void {
    alert(`Your message: "${this.form.value.comment}" was send. We will reply you on email: ${this.form.value.email}`);
    this.form.reset();

  }
}
