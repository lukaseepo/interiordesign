import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  activateSlide(i:number){
    const sliders:any = document.querySelectorAll('.slider');
    sliders[i].classList.add('active');
  }

  closeSlide(){
    const sliders:any = document.querySelectorAll('.slider');
    for(let i = 0; i < sliders.length; i++){
      sliders[i].classList.remove('active');
    }
  }

  customOptionsSlider: any = {
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
