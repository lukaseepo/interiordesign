import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import * as $ from "jquery";




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  activate:boolean = false;

  activateSecond:boolean = false;

  activateFourth:boolean = false;
  activateFifth:boolean = false;

  list:any = [{}];

  activated:boolean = false;
  
  popUp:boolean = false;

  activateThird:boolean = false;


  constructor(private http:MainService) { }
 
  ngOnInit(): void {
  }
  closeSlide1(){
    this.activate = false;
  }

  closeSlide2(){
    this.activateSecond = false;
  }

  closeSlide3(){
    this.activateThird = false;
  }

  closeSlide4(){
    this.activateFourth = false;
  }

  closeSlide5(){
    this.activateFifth = false;
  }

  activateSlider5(){
    this.activateFifth = true;
  }

  activateSlider4(){
    this.activateFourth = true;
  }
  
  activateSlider3(){
    this.activateThird = true;
  }


  activateSlider2(){
    this.activateSecond = true;
  }

  activateSlider(){
    this.activate = true;
  }



  popUpVideo(){
    this.popUp = true;
  }

  close(){
    this.popUp = false;
  }

  customOptionsInfo: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplaySpeed:1200,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },

  }

  


  customOptionsLogo: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplaySpeed:1200,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
  }


  
  customOptions2: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplaySpeed:1200,
    autoplayTimeout: 7000,
    navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
    nav:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },

  }

 
  customOptions: any = {
    loop: true,
    dots: false,
    autoplay:true,
    autoplaySpeed:1200,
    autoplayTimeout: 7000,
    animateIn:'fadeIn',
    animateOut:'fadeOut',
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },

  }

  
}
