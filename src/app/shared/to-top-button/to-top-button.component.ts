import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-top-button',
  templateUrl: './to-top-button.component.html',
  styleUrls: ['./to-top-button.component.scss']
})
export class ToTopButtonComponent implements OnInit {

  @HostListener('window:scroll', ['$event']) // for window scroll events

  onScroll(event) {
    let button = document.getElementById('toTopButton')

    if (window.pageYOffset >= 700) {
      button.style.opacity = '1'
    } else {
      button.style.opacity = '0'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  toTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

}
