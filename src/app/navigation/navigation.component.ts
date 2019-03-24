import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".btn").click(function(){
      //alert($(this));
      //$("body").toggleClass("active");
      $(".bar1").toggleClass("active");
      $(".bar2").toggleClass("active");
      $(".bar3").toggleClass("active");
    });
  }

}
