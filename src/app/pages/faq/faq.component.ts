import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activateChevron(){
    let chevron = document.getElementById('chevron');
    let color = document.getElementById('activatecolor');
    let colorSpan = document.getElementById('activatecolorspan');
    chevron.classList.toggle('activate');
    color.classList.toggle('activatecolor');
    colorSpan.classList.toggle('activatecolor');
  }

  activateChevron2(){
    let chevron = document.getElementById('chevron2');
    let color = document.getElementById('activatecolor2');
    let colorSpan = document.getElementById('activatecolorspan2');
    chevron.classList.toggle('activate');
    color.classList.toggle('activatecolor');
    colorSpan.classList.toggle('activatecolor');
  }

  activateChevron3(){
    let chevron = document.getElementById('chevron3');
    let color = document.getElementById('activatecolor3');
    let colorSpan = document.getElementById('activatecolorspan3');
    chevron.classList.toggle('activate');
    color.classList.toggle('activatecolor');
    colorSpan.classList.toggle('activatecolor');
  }

  activateChevron4(){
    let chevron = document.getElementById('chevron4');
    let color = document.getElementById('activatecolor4');
    let colorSpan = document.getElementById('activatecolorspan4');
    chevron.classList.toggle('activate');
    color.classList.toggle('activatecolor');
    colorSpan.classList.toggle('activatecolor');
  }

  activateChevron5(){
    let chevron = document.getElementById('chevron5');
    let color = document.getElementById('activatecolor5');
    let colorSpan = document.getElementById('activatecolorspan5');
    chevron.classList.toggle('activate');
    color.classList.toggle('activatecolor');
    colorSpan.classList.toggle('activatecolor');
  }

  activateChevron6(){
    let chevron = document.getElementById('chevron6');
    let color = document.getElementById('activatecolor6');
    let colorSpan = document.getElementById('activatecolorspan6');
    chevron.classList.toggle('activate');
    color.classList.toggle('activatecolor');
    colorSpan.classList.toggle('activatecolor');
  }

}
