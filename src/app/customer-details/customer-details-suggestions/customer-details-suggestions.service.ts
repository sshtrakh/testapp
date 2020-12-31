import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SuggestionInterface} from './suggestion.interface';

@Injectable({
  providedIn: 'root'
})

export class CustomerDetailsSuggestionsService {

  private baseUri = 'https://api.unsplash.com/photos/random';

  constructor(private http: HttpClient) {
  }

  getPhotos(): Observable<SuggestionInterface[]> {
    return this.http.get<any[]>(this.baseUri, {
      headers: {Authorization: 'Client-ID RYIR0TJv5D5Zf5DyHnEXudGsNDqsPH3Rh4WlMf5DqVs'},
      params: {count: '12'}
    }).pipe(map( res => res.map(v => ({
      url: v.urls.small ,
      alt: v.alt_description
    }))));
  }


}
