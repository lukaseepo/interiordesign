import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  activate:boolean = false;
  activateSecond:boolean = false;
  activateThird:boolean = false;
  activateFourth:boolean = false;
  activateFifth:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }
  closeSlide1(){
    this.activate = false;
  }

  activateSlider(){
    this.activate = true;
  }
  closeSlide2(){
    this.activateSecond = false;
  }

  activateSlider2(){
    this.activateSecond = true;
  }

  closeSlide3(){
    this.activateThird = false;
  }
  activateSlider3(){
    this.activateThird = true;
  }
 
  closeSlide4(){
    this.activateFourth = false;
  }
  activateSlider4(){
    this.activateFourth = true;
  }


  closeSlide5(){
    this.activateFifth = false;
  }
  activateSlider5(){
    this.activateFifth = true;
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
}
