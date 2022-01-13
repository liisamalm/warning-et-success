import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-alert',
  templateUrl: './info-alert.component.html',
  styleUrls: ['./info-alert.component.css']
})
export class InfoAlertComponent implements OnInit {
  faInfoCircle = faInfoCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
