import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import Rellax from 'rellax';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const rellax = new Rellax('.rellax');

    const options = {
      strings: ['Junior Front-End Developer.', 'Nerijus Turauskis'],
      typeSpeed: 80,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    const typed = new Typed('.typed-element', options);

    }

}
