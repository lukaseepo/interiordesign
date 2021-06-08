import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {
  activate:boolean = false;
  activateSlide:boolean = true;
 
  constructor() { }

  popUp:boolean = false;

  ngOnInit(): void {
  }

 
  popUpVideo(){
    this.popUp = true;
    this.activateSlide = false;
  }

  close(){
    this.popUp = false;
    this.activateSlide = true;
  }


  activateSlider(){
    this.activate = true;
  }
  customOptions: any = {
    loop: true,
    mouseDrag:false,
    touchDrag:false,
    pullDrag:false,
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


}
