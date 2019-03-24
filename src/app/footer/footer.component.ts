import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    if ($('#back-to-top').length) {
      // tslint:disable-next-line:one-variable-per-declaration
      const scrollTrigger = 100, // px
          backToTop = function () {
              const scrollTop = $(window).scrollTop();
              if (scrollTop > scrollTrigger) {
                  $('#back-to-top').addClass('show');
              } else {
                  $('#back-to-top').removeClass('show');
              }
          };
      backToTop();
      // tslint:disable-next-line:only-arrow-functions
      $(window).on('scroll', function() {
          backToTop();
      });
      // tslint:disable-next-line:only-arrow-functions
      $('#back-to-top').on('click', function(e) {
          e.preventDefault();
          $('html,body').animate({
              scrollTop: 0
          }, 700);
      });
  }

  }

}
