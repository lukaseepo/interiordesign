import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectdetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  zoomIn(){
    let slideImage = document.getElementById('slideimage');
    slideImage.classList.toggle('zoomin')
  }

  activateClass(){
    let id = document.getElementById('share');
    id.classList.toggle('activateclass')
  }

  activateSlide(i:number){
    let slides = document.querySelectorAll('.slide');
    slides[i].classList.add('activate')
  }
  
  close(){
    let slides = document.querySelectorAll('.slide');
    for(let i = 0; i < slides.length; i++){
      slides[i].classList.remove('activate');
    }
  }


}
