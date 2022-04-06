import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-action-spinner',
  templateUrl: './action-spinner.component.html',
  styleUrls: ['./action-spinner.component.scss']
})
export class ActionSpinnerComponent implements OnInit {
@Input() diameter = 20;
@Input() color = 'primary';
@Input() phrase = 'Saving';
  constructor() { }

  ngOnInit() {
  }

}
