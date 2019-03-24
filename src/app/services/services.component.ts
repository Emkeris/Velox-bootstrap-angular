import { Component, OnInit } from '@angular/core';
import Rellax from 'rellax';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const rellax = new Rellax('.rellax');
  }

}
