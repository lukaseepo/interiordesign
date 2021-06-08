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

  activate1(){
    let activate = document.getElementById('activated1')
    let activate2 = document.getElementById('activated2')
    let activate3 = document.getElementById('activated3')
    let activate4 = document.getElementById('activated4')
    activate2.classList.remove('activated')
    activate3.classList.remove('activated')
    activate4.classList.remove('activated')
    activate.classList.toggle('activated')
  }
  activate2(){
    let activate = document.getElementById('activated2')
    let activate2 = document.getElementById('activated1')
    let activate3 = document.getElementById('activated3')
    let activate4 = document.getElementById('activated4')
    activate2.classList.remove('activated')
    activate3.classList.remove('activated')
    activate4.classList.remove('activated')
    activate.classList.toggle('activated')
  }
  activate3(){
    let activate = document.getElementById('activated3')
    let activate2 = document.getElementById('activated1')
    let activate3 = document.getElementById('activated2')
    let activate4 = document.getElementById('activated4')
    activate2.classList.remove('activated')
    activate3.classList.remove('activated')
    activate4.classList.remove('activated')
    activate.classList.toggle('activated')
  }
  activate4(){
    let activate = document.getElementById('activated4')
    let activate2 = document.getElementById('activated1')
    let activate3 = document.getElementById('activated3')
    let activate4 = document.getElementById('activated2')
    activate2.classList.remove('activated')
    activate3.classList.remove('activated')
    activate4.classList.remove('activated')
    activate.classList.toggle('activated')
  }


  enableLeftBar(){
    let leftBar = document.getElementById('leftBar');
    leftBar.classList.add('enable');
  }

  disableLeftBar(){
    let leftBar = document.getElementById('leftBar');
    leftBar.classList.remove('enable');
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
