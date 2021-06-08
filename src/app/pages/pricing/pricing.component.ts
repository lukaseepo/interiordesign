import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

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
    let activatecolor = document.getElementById('activatecolor2');
    let activatecolorSpan = document.getElementById('activatecolorspan2');
    chevron.classList.toggle('activate');
    activatecolor.classList.toggle('activatecolor');
    activatecolorSpan.classList.toggle('activatecolor');
  }
  activateChevron3(){
    let chevron = document.getElementById('chevron3');
    let activatecolor = document.getElementById('activatecolor3');
    let activatecolorSpan = document.getElementById('activatecolorspan3');
    chevron.classList.toggle('activate');
    activatecolor.classList.toggle('activatecolor');
    activatecolorSpan.classList.toggle('activatecolor');
  }

 

}
