import {Component, OnInit} from '@angular/core';
import {CustomerDetailsSuggestionsService} from './customer-details-suggestions.service';
import {SuggestionInterface} from './suggestion.interface';

@Component({
  selector: 'app-customer-details-suggestions',
  templateUrl: './customer-details-suggestions.component.html',
  styleUrls: ['./customer-details-suggestions.component.scss']
})
export class CustomerDetailsSuggestionsComponent implements OnInit {

  images: SuggestionInterface[];

  constructor(private service: CustomerDetailsSuggestionsService) {
  }

  ngOnInit(): void {
    this.service.getPhotos().subscribe(res => {
      this.images = res;
    });
  }

}
