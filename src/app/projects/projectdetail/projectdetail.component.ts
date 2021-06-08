import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectdetailComponent implements OnInit {

  activate:boolean = false;
  activate2:boolean = false;
  activate3:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  activateSlide(){
    this.activate = true;
  }

  zoomIn(){
    let slideImage = document.getElementById('slideimage');
    slideImage.classList.toggle('zoomin')
  }

  activateClass(){
    let id = document.getElementById('share');
    id.classList.toggle('activateclass')
  }

  
  close(){
    this.activate = false; 
  }
  
  close2(){
    this.activate2 = false; 
  }
  
  close3(){
    this.activate3 = false; 
  }



  activateSlide2(){
    this.activate2 = true;
  }

  activateSlide3(){
    this.activate3 = true;
  }

}
