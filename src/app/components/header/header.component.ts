import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activated:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  activate(i:number){
    let uls = document.querySelectorAll('.ulActivated')
    for(let i = 0; i < uls.length; i++){
      uls[i].classList.remove('activated');
    }
    uls[i].classList.add('activated');
  }

  enableLeftBar(){
    let leftBar = document.getElementById('leftBar');
    leftBar.classList.toggle('enable');
    let uls = document.querySelectorAll('.ulActivated')
    for(let i = 0; i < uls.length; i++){
      uls[i].classList.remove('activated');
    }
  }

  disableLeftBar(){
    let leftBar = document.getElementById('leftBar');
    let uls = document.querySelectorAll('.ulActivated')
    leftBar.classList.remove('enable');
    for(let i = 0; i < uls.length; i++){
      uls[i].classList.remove('activated');
    }
  }

  @HostListener('document:scroll')

  scrollFuntction(){
    if(document.documentElement.scrollTop > 80 || document.body.scrollTop > 70){
      this.activated = true;
    }else{
      this.activated = false;
    }
  }



}
