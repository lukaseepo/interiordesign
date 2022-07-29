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

  activateChevron(i:number){
    let chevrons = document.querySelectorAll('.chevron');
    let colorSpans = document.querySelectorAll('.colorSpan');
    for(let i = 0; i < chevrons.length && colorSpans.length; i++){
        chevrons[i].classList.remove('activate');
        colorSpans[i].classList.remove('activatecolor')
    }
    chevrons[i].classList.add('activate');
    colorSpans[i].classList.add('activatecolor');
  }

}
