import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BasicFormRoutingModule} from './basic-form-routing.module';
import {BasicFormComponent} from './basic-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgxMatFileInputModule} from '@angular-material-components/file-input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    CommonModule,
    BasicFormRoutingModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatAutocompleteModule,
    NgxMatFileInputModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class BasicFormModule { }
