import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatRadioChange} from '@angular/material/radio';
import {Observable} from 'rxjs';
import {debounceTime, filter, map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  myForm: FormGroup;
  options: Observable<string[]>;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      sent: [null, [Validators.required]]
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const array = [];
    for (let i = 0; i < 10; i++) {
      array[i] = filterValue
        .concat(Math.floor(Math.random() * Math.pow(10, 10 - filterValue.length)).toString());
    }
    return array;
  }


  onStatusChange($event: MatRadioChange): void {
    console.log($event);
    switch ($event.value) {
      case true:
        this.addFileDetails();
        break;
      case false:
        this.addPassportNumber();
        break;
      default:

    }
  }


  private addFileDetails(): void {
    this.myForm.addControl('file', this.fb.control(null, [Validators.required]));
    this.myForm.addControl('date', this.fb.control(null, [Validators.required]));
    this.myForm.addControl('comment', this.fb.control(null,));
    this.myForm.removeControl('passNumber');
    this.myForm.removeControl('urgent');
  }

  private addPassportNumber(): void {
    this.myForm.addControl('passNumber', this.fb.control(null, [Validators.required, Validators.pattern(/^[0-9]{10}$/)]));
    this.initAutoComplete();
    this.myForm.addControl('urgent', this.fb.control(null, [Validators.required]));
    this.myForm.removeControl('file');
    this.myForm.removeControl('date');
    this.myForm.removeControl('comment');
  }

  onUrgencyChange($event: MatRadioChange): void {
    if ($event.value === true) {
      this.addDeadline();
    }
    if ($event.value === false) {
      this.myForm.removeControl('deadline');
    }
  }

  private addDeadline(): void {
    this.myForm.addControl('deadline', this.fb.control(null, [Validators.required]));
  }

  onSave(): void {
    console.log(this.myForm.value);
    alert('Saved!');
    this.myForm.reset();
  }

  private initAutoComplete(): void {
    this.options = this.myForm.get('passNumber').valueChanges.pipe(
      debounceTime(300),
      map(v => v?.trim()),
      filter(v => !!v),
      map(value => this._filter(value))
    );
  }
}
