import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { RegisterModalComponent } from '../shared/register-modal/register-modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isFirstOpen = true;
  modalRef?: BsModalRef;
  incrementer = 0
  slideIndex = 1;
  GallerySlides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>
  demos = document.getElementsByClassName("demo");

  Departments = [
    {
      DepartImg: 'assets/images/home-welcoming/bussiness.png',
      DepartName: localStorage.getItem("currentLang") == 'ar' ? 'إدارة اعمال' : 'Business Management',
      DepartLink: '/departments/bussiness-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/petrolium.png',
      DepartName: this.translate.currentLang == 'ar' ? 'خدمات بترولية' : 'Petroleum Services',
      DepartLink: '/departments/petrol-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/medical.png',
      DepartName: this.translate.currentLang == 'ar' ? 'خدمات صحية' : 'Medical Services',
      DepartLink: '/departments/medical-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/hotels.png',
      DepartName: this.translate.currentLang == 'ar' ? 'سياحة و فنادق' : 'Tourism And Hotels',
      DepartLink: '/departments/hotels-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/journalism.png',
      DepartName: this.translate.currentLang == 'ar' ? 'صحافة و إعلام' : 'Journalism and Media',
      DepartLink: '/departments/journalism-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/it.png',
      DepartName: this.translate.currentLang == 'ar' ? 'تكنولوجيا المعلومات' : 'Information Technology',
      DepartLink: '/departments/it-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/maps.png',
      DepartName: this.translate.currentLang == 'ar' ? 'مساحة وخرائط' : 'Survey And Maps',
      DepartLink: '/departments/maps-department'
    },
  ]

  experienceYears = 0;

  experienceYearsStop = setInterval(() => {
    this.experienceYears++
    if (this.experienceYears == 26) {
      clearInterval(this.experienceYearsStop)
    }
  }, 100)

  academyDeparts = 0;

  academyDepartsStop = setInterval(() => {
    this.academyDeparts++
    if (this.academyDeparts == 8) {
      clearInterval(this.academyDepartsStop)
    }
  }, 200)

  staffNumber = 0

  staffNumberStop = setInterval(() => {
    this.staffNumber++
    if (this.staffNumber == 60) {
      clearInterval(this.staffNumberStop)
    }
  }, 50)


  slides = [
    { img: "assets/images/partners/helwan.png" },
    { img: "assets/images/partners/adults.png" },
    { img: "assets/images/partners/assiut.png" },
    { img: "assets/images/partners/dubai.png" },
    { img: "assets/images/partners/investigation.png" },
    { img: "assets/images/partners/azhar.png" },
    { img: "assets/images/partners/benha.png" },
    { img: "assets/images/partners/watny.png" },
    { img: "assets/images/partners/cairo.png" },
  ];

  sliderConfig = {
    rtl: this.translate.currentLang == 'ar' ? true : false,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  customOptions: OwlOptions = {
    rtl: this.translate.currentLang == 'ar' ? true : false,
    loop: true,
    center: true,
    margin: 20,
    nav: false,
    items: 3,
    navSpeed: 2000
  }
  constructor(private modalService: BsModalService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.test()
    this.showSlides(this.slideIndex)
  }

  register() {
    this.modalRef = this.modalService.show(RegisterModalComponent, { class: 'modal-xl modal-dialog-centered' });
  }

  test() {
    this.changeOrder()
  }

  changeOrder() {
    setTimeout(() => {
      this.change(0, 6)
      this.stopCounter()
    }, 30000)
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

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    if (n > this.GallerySlides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = this.GallerySlides.length }
    for (let i = 0; i < this.GallerySlides.length; i++) {
      this.GallerySlides[i].style.display = "none";
    }
    for (let i = 0; i < this.demos.length; i++) {
      this.demos[i].className = this.demos[i].className.replace(" active", "");
    }
    this.GallerySlides[this.slideIndex - 1].style.display = "block";
    this.demos[this.slideIndex - 1].className += " active";
  }

}
