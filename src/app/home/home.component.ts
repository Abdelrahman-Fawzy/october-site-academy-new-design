import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { RegisterModalComponent } from '../shared/register-modal/register-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isFirstOpen = true;
  modalRef?: BsModalRef;
  incrementer = 0

  Departments = [
    {
      DepartImg: 'assets/images/home-welcoming/bussiness.png',
      DepartName: 'إدارة اعمال',
      DepartLink: '/departments/bussiness-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/petrolium.png',
      DepartName: 'خدمات بترولية',
      DepartLink: '/departments/petrol-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/medical.png',
      DepartName: 'خدمات صحية',
      DepartLink: '/departments/medical-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/hotels.png',
      DepartName: 'سياحة و فنادق',
      DepartLink: '/departments/hotels-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/journalism.png',
      DepartName: 'صحافة و اعلام',
      DepartLink: '/departments/journalism-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/it.png',
      DepartName: 'تكنولوجيا المعلومات',
      DepartLink: '/departments/it-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/maps.png',
      DepartName: 'مساحة و خرائط',
      DepartLink: '/departments/maps-department'
    },
  ]


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
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    // this.test()
  }

  register() {
    this.modalRef = this.modalService.show(RegisterModalComponent, {class: 'modal-xl modal-dialog-centered'});
  }

  test() {
    this.changeOrder()
  }

  changeOrder() {
    setTimeout(() => {
      this.change(0, 6)
      this.stopCounter()
    }, 1000)
  }

  stopCounter() {
    if (this.incrementer == 6) {
      this.incrementer = 0
      this.changeOrder()
    } else {
      this.incrementer = this.incrementer + 1
      this.changeOrder()
    }
  }

  change(from, to) {
    this.Departments.splice(to, 0, this.Departments.splice(from, 1)[0]);
  }

}
