import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit, AfterViewInit {

  isFirstOpen = true;
  modalRef?: BsModalRef;
  incrementer = 0
  slideIndex = 1;
  trainingSlideIndex = 1
  videosSlideIndex = 1
  studentsVideosSlideIndex = 1
  GallerySlides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>
  demos = document.getElementsByClassName("demo");
  // experienceYearsStop
  // academyDepartsStop
  // staffNumberStop

  Departments = [
    {
      DepartImg: 'assets/images/home-welcoming/imagesUpdated/bussiness.jpg',
      DepartName: localStorage.getItem("currentLang") == 'ar' ? 'إدارة الأعمال' : localStorage.getItem("currentLang") == 'gr' ? 'Betriebswirtschaftslehre' : 'Business Management',
      DepartLink: '/departments/bussiness-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/imagesUpdated/media.jpg',
      DepartName: this.translate.currentLang == 'ar' ? 'الصحافة و الإعلام' : localStorage.getItem("currentLang") == 'gr' ? 'Mediendienste' : 'Journalism and Media',
      DepartLink: '/departments/journalism-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/imagesUpdated/it.jpg',
      DepartName: this.translate.currentLang == 'ar' ? 'تكنولوجيا المعلومات و الشبكات' : localStorage.getItem("currentLang") == 'gr' ? 'Netzwerktechnologie' : 'Information Technology',
      DepartLink: '/departments/it-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/imagesUpdated/maps.jpg',
      DepartName: this.translate.currentLang == 'ar' ? 'المساحة و الخرائط' : localStorage.getItem("currentLang") == 'gr' ? 'Vermessungsdienste' : 'Survey And Maps',
      DepartLink: '/departments/maps-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/imagesUpdated/hotels.jpg',
      DepartName: this.translate.currentLang == 'ar' ? 'الخدمات السياحية و الفندقية' : localStorage.getItem("currentLang") == 'gr' ? 'Tourismus und Hotels' : 'Tourism And Hotels',
      DepartLink: '/departments/hotels-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/imagesUpdated/petrolium.jpg',
      DepartName: this.translate.currentLang == 'ar' ? 'الخدمات البترولية' : localStorage.getItem("currentLang") == 'gr' ? 'Erdöldienstleistungen' : 'Petroleum Services',
      DepartLink: '/departments/petrol-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/imagesUpdated/graphic.jpg',
      DepartName: this.translate.currentLang == 'ar' ? 'تكنولوجيا الجرافيك' : localStorage.getItem("currentLang") == 'gr' ? 'Vermessungsdienste' : 'Graphic Technology',
      DepartLink: '/departments/it-graphic-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/imagesUpdated/medical.jpg',
      DepartName: this.translate.currentLang == 'ar' ? 'الخدمات الصحية' : localStorage.getItem("currentLang") == 'gr' ? 'Gesundheitsdienste' : 'Medical Services',
      DepartLink: '/departments/medical-department'
    }
  ]

  videos6octoberCenter: any[] = []
  videosStudentsTraining: any[] = []

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
    infinite: false,
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

  studentsTrainingSliderConfig = {
    rtl: this.translate.currentLang == 'ar' ? true : false,
    dots: true,
    arrows: false,
    autoplay: false,
    speed: 1500,
    infinite: false,
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

  currentCenterIndex = 0; // Initially set to the center image

  photosSliderConfig = {
    rtl: this.translate.currentLang == 'ar' ? true : false,
    dots: true,
    arrows: false,
    autoplay: false,
    speed: 1500,
    infinite: false,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: '60px',
    // variableWidth: false,
    responsive: [
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     slidesToShow: 3,
      //     arrows: false,
      //   },
      // },
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

  trainingImages: string[] = []
  trainingImagesShown: string[] = []

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

      this.trainingImages = [
        '/assets/images/small-image.png',
        '/assets/images/small-image.png',
        '/assets/images/small-image.png',
        '/assets/images/small-image.png',
        '/assets/images/small-image.png',
        '/assets/images/small-image.png',
        '/assets/images/small-image.png',
        '/assets/images/small-image.png',
      ]
      this.trainingImagesShown = [
        '/assets/images/big-image.png',
        '/assets/images/big-image.png',
        '/assets/images/big-image.png',
        '/assets/images/big-image.png',
        '/assets/images/big-image.png',
        '/assets/images/big-image.png',
        '/assets/images/big-image.png',
        '/assets/images/big-image.png',
      ]
    }

  ngOnInit(): void {
    // this.test()
    // this.showSlides(this.slideIndex)
    this.titleService.setTitle(this.route.snapshot.data['title'])

    this.fillVideos()
    this.fillPhotos()
  }
  
  ngAfterViewInit(): void {
    this.videosShowSlides(this.videosSlideIndex)
    this.videosStudentsTrainingShowSlides(this.trainingSlideIndex)
    this.trainingShowSlides(this.trainingSlideIndex)
    document.getElementById('videoDefaultOpen').click()
    document.getElementById('defaultOpen').click()
  }

  openVideoTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("videoTabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("videoTablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  videosCurrentSlide(n) {
    this.videosShowSlides(this.videosSlideIndex = n);
  }

  studentsVideosCurrentSlide(n) {
    this.videosStudentsTrainingShowSlides(this.studentsVideosSlideIndex = n);
  }

  currentSlide(n) {
    this.trainingShowSlides(this.trainingSlideIndex = n);
  }

  videosShowSlides(n) {
    let i;
    let slides: any = document.getElementsByClassName("videoIframe");
    let dots = document.getElementsByClassName("videoItem");
    if (n > slides.length) {this.videosSlideIndex = 1}
    if (n < 1) {this.videosSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.videosSlideIndex-1].style.display = "block";
    dots[this.videosSlideIndex-1].className += " active";
  }

  videosStudentsTrainingShowSlides(n) {
    this.studentsVideosSlideIndex = n
    let i;
    let slides: any = document.getElementsByClassName("studentsVideoIframe");
    let dots = document.getElementsByClassName("studentsVideoItem");
    
    if (n > slides.length) {
      this.studentsVideosSlideIndex = 1
    }
    
    if (n < 1) {
      this.studentsVideosSlideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.studentsVideosSlideIndex-1].style.display = "block";
    dots[this.studentsVideosSlideIndex-1].className += " active";
  }

  trainingShowSlides(n) {
    let i;
    let slides: any = document.getElementsByClassName("galleryImg");
    let dots = document.getElementsByClassName("demo");
    console.log(slides);
    console.log(dots);
    this.trainingSlideIndex = n
    if (n > slides.length) {this.trainingSlideIndex = 1}
    if (n < 1) {this.trainingSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.trainingSlideIndex-1].style.display = "block";
    dots[this.trainingSlideIndex-1].className += " active";
  }

  register() {
    this.modalRef = this.modalService.show(RegisterModalComponent, { class: 'modal-xl modal-dialog-centered' });
  }

  // test() {
  //   this.changeOrder()
  // }

  // changeOrder() {
  //   setTimeout(() => {
  //     this.change(0, 13)
  //     this.stopCounter()
  //   }, 30000)
  // }

  // stopCounter() {
  //   if (this.incrementer == 13) {
  //     this.incrementer = 0
  //     this.changeOrder()
  //   } else {
  //     this.incrementer = this.incrementer + 1
  //     this.changeOrder()
  //   }
  // }

  // change(from, to) {
  //   this.Departments.splice(to, 0, this.Departments.splice(from, 1)[0]);
  // }

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
    this.videos6octoberCenter = [
      {
        id: 1,
        video_name: "المهندس فؤاد عبدالمنعم",
        video_description: "المهندس فؤاد عبد المنعم المدير الاداري لمؤسسة 6 أكتوبر للتنمية البشرية يحكي تاريخ إنشاء المؤسسة"
      },
      {
        id: 2,
        video_name: "زيارة وزير العمل",
        video_description: "زيارة معالي وزير العمل / حسن شحاتة للمقر الرئيسي بالجيزة"
      },
      {
        id: 3,
        video_name: "التفاعل اليومي",
        video_description: "التفاعل اليومي داخل مراكز 6 أكتوبر"
      },
      {
        id: 4,
        video_name: "مجال البترول",
        video_description: "مجال البترول يحتاج إلى العمل الميداني واكتساب المهارات اللازمة منك، لحجز مكانك في الوظائف الشاغرة"
      }
    ]

    this.videosStudentsTraining = [
      {
        id: 1,
        video_name: "قصة نجاح جرجس مجدي",
        video_description: "قصة نجاح المتدرب جرجس مجدي درس المساحة والخرائط في مراكز 6 أكتوبر للتدريب المهني"
      },
      {
        id: 2,
        video_name: "قصة نجاح عمر هاني",
        video_description: "تجربه عمر هاني داخل مراكز 6 أكتوبر من الناحية العملية والتدريبية"
      },
      {
        id: 3,
        video_name: "قصة نجاح فتحي أبو بكر",
        video_description: "الطالب فتحي أبو بكر تخصص تكنولوجيا المعلومات - شبكات، يحكي لنا عن تجربته داخل مراكز 6 أكتوبر"
      },
      {
        id: 4,
        video_name: "بما إنك خريج مميز",
        video_description: "بما إنك خريج مميز وإتدربت معانا في مراكز 6 أكتوبر"
      },
      {
        id: 5,
        video_name: "بما إنك خريج مميز",
        video_description: "بما إنك خريج مميز"
      },
      {
        id: 6,
        video_name: "بما إنك خريج مميز",
        video_description: "بما إنك خريج مميز"
      },
      {
        id: 7,
        video_name: "قصة نجاح محمد أنور",
        video_description: "قصة نجاح محمد أنور واحد من شباب كتير إتخرجوا من مراكز 6 أكتوبر للتدريب المهني"
      }
    ]

    console.log(this.videos6octoberCenter);
    
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

  afterChange(event: any): void {
    console.log(event);
    
    this.currentCenterIndex = event.currentSlide + 2; // Adjust for centering logic
  }

}
