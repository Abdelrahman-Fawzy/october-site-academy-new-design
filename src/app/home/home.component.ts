import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isFirstOpen = true;


  slides = [
    {img: "assets/images/partners/helwan.png"},
    {img: "assets/images/partners/adults.png"},
    {img: "assets/images/partners/assiut.png"},
    {img: "assets/images/partners/dubai.png"},
    {img: "assets/images/partners/investigation.png"},
    {img: "assets/images/partners/azhar.png"},
    {img: "assets/images/partners/benha.png"},
    {img: "assets/images/partners/watny.png"},
    {img: "assets/images/partners/cairo.png"},
  ];

  sliderConfig = {
    rtl: true,
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 1500,
    infinite: false,
    pauseOnHover: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  customOptions: OwlOptions = {
    rtl: true,
    loop: true,
    center: true,
    margin: 20,
    nav: false,
    items: 3,
    navSpeed: 2000,
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   400: {
    //     items: 2
    //   },
    //   740: {
    //     items: 3
    //   },
    //   940: {
    //     items: 4
    //   }
    // },
  }
  constructor() { }

  ngOnInit(): void {
  }

}
