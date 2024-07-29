import { Component, HostListener, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { RegisterModalComponent } from '../shared/register-modal/register-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PartnerDetailsComponent } from '../shared/partner-details/partner-details.component';

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
  // experienceYearsStop
  // academyDepartsStop
  // staffNumberStop

  Departments = [
    {
      DepartImg: 'assets/images/home-welcoming/bussiness.jpg',
      DepartName: localStorage.getItem("currentLang") == 'ar' ? 'إدارة الأعمال' : localStorage.getItem("currentLang") == 'gr' ? 'Betriebswirtschaftslehre' : 'Business Management',
      DepartLink: '/departments/bussiness-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/new_petrolium.png',
      DepartName: this.translate.currentLang == 'ar' ? 'الخدمات البترولية' : localStorage.getItem("currentLang") == 'gr' ? 'Erdöldienstleistungen' : 'Petroleum Services',
      DepartLink: '/departments/petrol-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/new_medical.png',
      DepartName: this.translate.currentLang == 'ar' ? 'الخدمات الصحية' : localStorage.getItem("currentLang") == 'gr' ? 'Gesundheitsdienste' : 'Medical Services',
      DepartLink: '/departments/medical-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/new_hotels.png',
      DepartName: this.translate.currentLang == 'ar' ? 'الخدمات السياحية و الفندقية' : localStorage.getItem("currentLang") == 'gr' ? 'Tourismus und Hotels' : 'Tourism And Hotels',
      DepartLink: '/departments/hotels-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/new_media.png',
      DepartName: this.translate.currentLang == 'ar' ? 'الصحافة و الإعلام' : localStorage.getItem("currentLang") == 'gr' ? 'Mediendienste' : 'Journalism and Media',
      DepartLink: '/departments/journalism-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/new_it.png',
      DepartName: this.translate.currentLang == 'ar' ? 'تكنولوجيا المعلومات و الشبكات' : localStorage.getItem("currentLang") == 'gr' ? 'Netzwerktechnologie' : 'Information Technology',
      DepartLink: '/departments/it-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/new_graphic.png',
      DepartName: this.translate.currentLang == 'ar' ? 'تكنولوجيا الجرافيك' : localStorage.getItem("currentLang") == 'gr' ? 'Vermessungsdienste' : 'Graphic Technology',
      DepartLink: '/departments/it-graphic-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/new_maps.png',
      DepartName: this.translate.currentLang == 'ar' ? 'المساحة و الخرائط' : localStorage.getItem("currentLang") == 'gr' ? 'Vermessungsdienste' : 'Survey And Maps',
      DepartLink: '/departments/maps-department'
    }
  ]

  videos: any[] = []

  experienceYears = 0;
  academyDeparts = 0;
  staffNumber = 0

  // @HostListener('window:scroll', ['$event'])
  // startCountingAcademyNumbers(event: any) {
  //   if (this.experienceYears < 26) {
  //     if (window.scrollY > 550) {
  //       this.experienceYearsStop = setInterval(() => {
  //         this.experienceYears++
  //         if (this.experienceYears == 26) {
  //           clearInterval(this.experienceYearsStop)
  //         }
  //       }, 1000)
  //     }
  //   } else {
  //     clearInterval(this.experienceYearsStop)
  //     this.experienceYears = 26
  //   }

  //   if (this.academyDeparts < 8) {
  //     if (window.scrollY > 550) {
  //       this.academyDepartsStop = setInterval(() => {
  //         this.academyDeparts++
  //         if (this.academyDeparts == 8) {
  //           clearInterval(this.academyDepartsStop)
  //         }
  //       }, 1000)
  //     }
  //   } else {
  //     clearInterval(this.academyDepartsStop)
  //     this.academyDeparts = 8
  //   }

  //   if (this.staffNumber < 60) {
  //     if (window.scrollY > 550) {
  //       this.staffNumberStop = setInterval(() => {
  //         this.staffNumber++
  //         if (this.staffNumber == 60) {
  //           clearInterval(this.staffNumberStop)
  //         }
  //       }, 1000)
  //     }
  //   } else {
  //     clearInterval(this.staffNumberStop)
  //     this.staffNumber = 60
  //   }
  // }

  experienceYearsStop = setInterval(() => {
    this.experienceYears++
    if (this.experienceYears == 28) {
      clearInterval(this.experienceYearsStop)
    }
  }, 100)

  academyDepartsStop = setInterval(() => {
    this.academyDeparts++
    if (this.academyDeparts == 17) {
      clearInterval(this.academyDepartsStop)
    }
  }, 200)

  staffNumberStop = setInterval(() => {
    this.staffNumber++
    if (this.staffNumber == 112) {
      clearInterval(this.staffNumberStop)
    }
  }, 50)

  slides = [
    { img: "assets/images/partners/helwan.png", Partner: "جامعة حلوان" },
    { img: "assets/images/partners/adults.png", Partner: "جهاز تشغيل شباب الخريجين" },
    { img: "assets/images/partners/assiut.png", Partner: "جامعة اسيوط" },
    { img: "assets/images/partners/dubai.png", Partner: "حكومة دبي" },
    { img: "assets/images/partners/investigation.png", Partner: "وزارة الاستثمار و التعاون الدولي" },
    { img: "assets/images/partners/azhar.png", Partner: "جامعة الازهر" },
    { img: "assets/images/partners/benha.png", Partner: "جامعة بنها" },
    { img: "assets/images/partners/watny.png", Partner: "المجلس الوطني للتدريب و التعليم" },
    { img: "assets/images/partners/cairo.png", Partner: "جامعة القاهرة" },
  ];

  departmentSliderConfig = {
    rtl: this.translate.currentLang == 'ar' ? true : false,
    dots: true,
    arrows: false,
    autoplay: false,
    speed: 1500,
    infinite: false,
    pauseOnHover: true,
    slidesToShow: 5,
    slidesToScroll: 1,
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
          slidesToShow: 1,
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
  sliderConfig = {
    rtl: this.translate.currentLang == 'ar' ? true : false,
    dots: true,
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
          slidesToShow: 1,
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

  videosSliderConfig = {
    rtl: this.translate.currentLang == 'ar' ? true : false,
    dots: true,
    arrows: false,
    autoplay: false,
    speed: 1500,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  photosSliderConfig = {
    rtl: this.translate.currentLang == 'ar' ? true : false,
    dots: true,
    arrows: false,
    autoplay: false,
    speed: 1500,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
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

  responsiveOptions
  photosResponsiveOptions

  photos: any[] = []

  constructor(private modalService: BsModalService, public translate: TranslateService, private readonly route: ActivatedRoute,
    private readonly titleService: Title) { 
      this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '768px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
      ];
      this.photosResponsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5,
            numScroll: 1
        },
        {
            breakpoint: '768px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
      ];
    }

  ngOnInit(): void {
    this.test()
    // this.showSlides(this.slideIndex)
    this.titleService.setTitle(this.route.snapshot.data['title'])

    this.fillVideos()
    this.fillPhotos()
  }

  register() {
    this.modalRef = this.modalService.show(RegisterModalComponent, { class: 'modal-xl modal-dialog-centered' });
  }

  test() {
    this.changeOrder()
  }

  changeOrder() {
    setTimeout(() => {
      this.change(0, 13)
      this.stopCounter()
    }, 30000)
  }

  stopCounter() {
    if (this.incrementer == 13) {
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

  // plusSlides(n) {
  //   this.showSlides(this.slideIndex += n);
  // }

  // currentSlide(n) {
  //   this.showSlides(this.slideIndex = n);
  // }

  // showSlides(n) {
  //   if (n > this.GallerySlides.length) { this.slideIndex = 1 }
  //   if (n < 1) { this.slideIndex = this.GallerySlides.length }
  //   for (let i = 0; i < this.GallerySlides.length; i++) {
  //     this.GallerySlides[i].style.display = "none";
  //   }
  //   for (let i = 0; i < this.demos.length; i++) {
  //     this.demos[i].className = this.demos[i].className.replace(" active", "");
  //   }
  //   this.GallerySlides[this.slideIndex - 1].style.display = "block";
  //   this.demos[this.slideIndex - 1].className += " active";
  // }

  fillVideos() {
    this.videos = [
      {
        id: 1,
        video_url: "https://player.vimeo.com/video/989687022?h=82077ccfb6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        video_name: "زيارة وزير العمل",
        video_description: " لأول مرة على مستوى مراكز التدريب المهني في مصر زيارة معالي وزير العمل للمقر الرئيسي بالجيزة"
      },
      {
        id: 2,
        video_url: "https://player.vimeo.com/video/989687022?h=82077ccfb6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        video_name: "آراء خريجين ٦ أكتوبر",
        video_description: "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي"
      },
      {
        id: 3,
        video_url: "https://player.vimeo.com/video/989682520?h=aec8bed83b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        video_name: "آراء خريجين ٦ أكتوبر",
        video_description: "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي"
      },
      {
        id: 4,
        video_url: "https://player.vimeo.com/video/989666052?h=9dcf8139c3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        video_name: "مراكز 6 اكتوبر",
        video_description: "الأولي ف التدريب المهني"
      },
      {
        id: 5,
        video_url: "https://player.vimeo.com/video/989669825?h=a3a6953b0e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        video_name: "مساعد الخدمات الصحية",
        video_description: "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي"
      },
    ]

    console.log(this.videos);
    
  }

  fillPhotos() {
    let photosLength = 8
    let count = 0

    for (let i = 1; i <= photosLength; i++) {
      count++
      this.photos.push({
        image: `assets/images/slider/${i}.JPG`
      })
    }

    console.log(this.photos);
    
  }

  partnerDetails(Partner: string, partnerImg: string) {
    const initialState = {
      Partner,
      partnerImg
    };
    this.modalRef = this.modalService.show(PartnerDetailsComponent, { initialState, class: 'modal-xl modal-dialog-centered' });
  }

}
