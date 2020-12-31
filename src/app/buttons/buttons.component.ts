import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  disabled = false;

  constructor() {
  }

  ngOnInit(): void {
    interval(5000).subscribe(res => {
      this.disabled = !this.disabled;
      console.log('timer ', this.disabled);
    });
  }

}
