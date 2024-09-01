import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
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
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  isFirstOpen = true;
  modalRef?: BsModalRef;
  incrementer = 0;
  slideIndex = 1;
  trainingSlideIndex = 1;
  videosSlideIndex = 1;
  studentsVideosSlideIndex = 1;
  GallerySlides = document.getElementsByClassName(
    'mySlides'
  ) as HTMLCollectionOf<HTMLElement>;
  demos = document.getElementsByClassName('demo');
  
  @ViewChildren('counterSpan') counterSpans!: QueryList<ElementRef>;
  counters: Array<{ targetNumber: number, startNumber: number }> = [
    { targetNumber: 17, startNumber: 0 },
    { targetNumber: 28693, startNumber: 0 },
    { targetNumber: 28, startNumber: 0 },
    { targetNumber: 112, startNumber: 0 }
  ];

  private started: boolean[] = [];

  Departments = [
    {
      DepartImg: 'assets/images/home-welcoming/imagesUpdated/bussiness.jpg',
      DepartName:
        localStorage.getItem('currentLang') == 'ar'
          ? 'إدارة الأعمال'
          : localStorage.getItem('currentLang') == 'gr'
            ? 'Betriebswirtschaftslehre'
            : 'Business Management',
      DepartLink: '/departments/bussiness-department',
    },
    {
      DepartImg: 'assets/images/home-welcoming/imagesUpdated/media.jpg',
      DepartName:
        this.translate.currentLang == 'ar'
          ? 'الصحافة و الإعلام'
          : localStorage.getItem('currentLang') == 'gr'
            ? 'Mediendienste'
            : 'Journalism and Media',
      DepartLink: '/departments/journalism-department',
    },
    {
      DepartImg: 'assets/images/home-welcoming/imagesUpdated/it.jpg',
      DepartName:
        this.translate.currentLang == 'ar'
          ? 'تكنولوجيا المعلومات و الشبكات'
          : localStorage.getItem('currentLang') == 'gr'
            ? 'Netzwerktechnologie'
            : 'Information Technology',
      DepartLink: '/departments/it-department',
    },
    {
      DepartImg: 'assets/images/home-welcoming/imagesUpdated/maps.jpg',
      DepartName:
        this.translate.currentLang == 'ar'
          ? 'المساحة و الخرائط'
          : localStorage.getItem('currentLang') == 'gr'
            ? 'Vermessungsdienste'
            : 'Survey And Maps',
      DepartLink: '/departments/maps-department',
    },
    {
      DepartImg: 'assets/images/home-welcoming/NEW/Number 1.jpg',
      // DepartImg: 'assets/images/home-welcoming/imagesUpdated/hotels.jpg',
      DepartName:
        this.translate.currentLang == 'ar'
          ? 'الخدمات السياحية و الفندقية'
          : localStorage.getItem('currentLang') == 'gr'
            ? 'Tourismus und Hotels'
            : 'Tourism And Hotels',
      DepartLink: '/departments/hotels-department',
    },
    {
      DepartImg: 'assets/images/home-welcoming/imagesUpdated/petrolium.jpg',
      DepartName:
        this.translate.currentLang == 'ar'
          ? 'الخدمات البترولية'
          : localStorage.getItem('currentLang') == 'gr'
            ? 'Erdöldienstleistungen'
            : 'Petroleum Services',
      DepartLink: '/departments/petrol-department',
    },
    {
      DepartImg: 'assets/images/home-welcoming/imagesUpdated/graphic.jpg',
      DepartName:
        this.translate.currentLang == 'ar'
          ? 'تكنولوجيا الجرافيك'
          : localStorage.getItem('currentLang') == 'gr'
            ? 'Vermessungsdienste'
            : 'Graphic Technology',
      DepartLink: '/departments/it-graphic-department',
    },
    {
      DepartImg: 'assets/images/home-welcoming/imagesUpdated/medical.jpg',
      DepartName:
        this.translate.currentLang == 'ar'
          ? 'الخدمات الصحية'
          : localStorage.getItem('currentLang') == 'gr'
            ? 'Gesundheitsdienste'
            : 'Medical Services',
      DepartLink: '/departments/medical-department',
    },
  ];

  videos6octoberCenter: any[] = [];
  videosStudentsTraining: any[] = [];

  experienceYears = 0;
  academyDeparts = 0;
  staffNumber = 0;

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
    this.experienceYears++;
    if (this.experienceYears == 28) {
      clearInterval(this.experienceYearsStop);
    }
  }, 150);

  academyDepartsStop = setInterval(() => {
    this.academyDeparts++;
    if (this.academyDeparts == 17) {
      clearInterval(this.academyDepartsStop);
    }
  }, 400);

  staffNumberStop = setInterval(() => {
    this.staffNumber++;
    if (this.staffNumber == 112) {
      clearInterval(this.staffNumberStop);
    }
  }, 250);

  slides = [
    { 
      img: "assets/images/partners/labor_ministry.jpg", 
      Partner: "وزارة العمل - الإدارة المركزية للتدريب المهني",
      info: 'حاصلين على الترخيص رقم 1 في التدريب المهني الصادربتاريخ 28-2-2024 وفقا لقانون العمل رقم 12 لسنة 2003',
      divElement: 'labor'
    },
    { 
      img: "assets/images/soro/military.jpg", 
      Partner: "وزارة الدفاع- إدارة التعليم و التدريب المهنى.",
      info: 'إنطلاقا من مبدأ التكامل و العمل المشترك وتبادل الخبرات بين القوات المسلحة والمؤسسات العاملة في مجال التدريب المهني تم اللإتفاق على بروتوكول تعاون الصادر بتاريخ 14-2-2024 . ',
      divElement: 'defense'
    },
    { 
      img: "assets/images/soro/هيئة_تنمية_صناعة_تكنولوجيا_المعلومات_(مصر).png", 
      Partner: "وزارة الإتصالات وتكنولوجيا المعلومات – هيئة تنمية صناعة التكنولوجيا.",
      info: 'ترخيص رقم 009640 تاريخ 12/09/2021',
      divElement: 'iteda'
    },
    { 
      img: "assets/images/soro/imsssages.jpeg", 
      Partner: "مجلس الوحدة الإقتصادية – مركز التدريب و البحوث والإستشارات",
      info: 'تم الإتفاق مع الأمانة العامة لمجلس الوحدة الاقتصادية العربية بعقد تنفيذ الصادر بتاريخ 16-4-2024 للعمل المشترك على مواكبة التطور العمي والمعملي العالمي في المجالات المختلفة.',
      divElement: 'trainingCenter'
    },
    { 
      img: "assets/images/soro/imassges.jpeg", 
      Partner: "وزارة الثقافة – قطاع شئون الإنتاج الثقافى",
      info: '',
      divElement: 'culture'
    },
    { 
      img: "assets/images/soro/images.jpeg", 
      Partner: "وزارة التربية والتعليم – التعليم الخاص.",
      divElement: 'education'
    },
    { 
      img: "assets/images/soro/logogfi.png", 
      Partner: "وزارة الإستثمار – الشركات المساهمة",
      info: '',
      divElement: 'investigation'
    },
    { 
      img: "assets/images/soro/imassssges.jpeg", 
      Partner: "وزارة التجارة والصناعة – المعهد القومى للجودة",
      info: 'حاصلين على ترخيص بمزاولة نشاط التدريب والتأهيل بشهادة رقم NQIT 347/326  الصادرة بتاريخ 8-5-2023 .',
      divElement: 'nqi'
    },
    { 
      img: "assets/images/partners/cairo.png", 
      Partner: "وزارة التضامن الإجتماعى – المجلس الوطنى للتدريب",
      info: 'محافظة القاهرة – جهاز تشغيل شباب الخريجين',
      divElement: 'training'
    },
    { 
      img: "assets/images/soro/IMG_20220401_140148-390x220.jpg", 
      Partner: "وزارة الثقافة – قطاع شئون الإنتاج الثقافى – الإدارة العامة",
      info: ' للتراخيص الفنية ترخيص رقم 52362 تاريخ 22/11/2021',
      divElement: 'generalManagement'
    },
    { 
      img: "assets/images/soro/images.png", 
      Partner: "جامعة أسيوط – كلية التجارة – مركز الخدمة العامة للإستشارات التجارية والتنمية الإدارية",
      info: '13/10/2020',
      divElement: 'assiut'
    },
    { 
      img: "assets/images/soro/dummy.jpg", 
      Partner: "جامعة أسيوط – وحدة نقل التكنولوجيا المتكاملةITTU  ",
      info: '27/08/2018',
      divElement: 'ITTU'
    },
    { 
      img: "assets/images/soro/imagxxxxxes.png", 
      Partner: "جامعة الأزهر – مركز الحاسب الالى ",
      info: '',
      divElement: 'azhar'
    },
    { 
      img: "assets/images/soro/imssssssages.png", 
      Partner: "جامعة القاهرة – كلية الإعلام – مركز التدريب والتوثيق والإنتاج الإعلامى",
      info: 'اتفاقية تعاون بتاريخ 11-6-2012 مع مركز التدريب والتوثيق والإنتاج الإعلامي بكلية الإعلام جامعة القاهرة، حيث تتضمن بنود هذه الاتفاقية منح شهادة معتمدة من مركز كلية الإعلام جامعة القاهرة لخريجي مراكز 6 أكتوبر. ',
      divElement: 'cairo'
    },
    { 
      img: "assets/images/soro/elaosboa15427.jpg", 
      Partner: "جامعة حلوان – كلية الأداب – مركز اللغات للأغراض المتخصصة 23/12/2012",
      info: '',
      divElement: 'helwan'
    },
    { 
      img: "assets/images/soro/dummy.jpg", 
      Partner: "جامعة بنها – كلية الأداب – مركز الدراسات الإنسانية 30-10-2013",
      info: '',
      divElement: 'benha'
    },
    { 
      img: "assets/images/soro/المقاولون_العرب.png", 
      Partner: "شركة المقاولون العرب",
      info: 'وكالة الأهرام للدعاية و الإعلان – مركز التدريب أماك بروتكول تعاون بتاريخ 16/08/2023 للتدريب العملى (صحافة وإعلام – جرافيك)',
      divElement: 'mokawloon'
    },
    { 
      img: "assets/images/soro/شركة أسيوط لتكرير البترول.jpeg", 
      Partner: "شركة أسيوط لتكرير البترول",
      info: '',
      divElement: 'assiutPetrol'
    },
    { 
      img: "assets/images/soro/شركة مانفودز ماكدونالدز.jpg", 
      Partner: "شركة مانفودز ماكدونالدز ",
      info: 'مارس 2013',
      divElement: 'mac'
    },
    { 
      img: "assets/images/soro/شركة الأمانى للأعمال المساحية.png", 
      Partner: "شركة الأمانى للأعمال المساحية",
      info: '',
      divElement: 'amany'
    },
    { 
      img: "assets/images/soro/قرية مجاويش السياحية – الغردقة.JPEG", 
      Partner: "قرية مجاويش السياحية – الغردقة",
      info: `تدريب على جميع أعمال السياحة والفنادق بتاريخ 17-01-2004
        فندق مارلين إن – الغردقة
        تدريب على جميع أعمال السياحة والفنادق بتاريخ 17-01-
        `,
      divElement: 'magawesh'
    },
    { 
      img: "assets/images/soro/لاروز لإدارة المطاعم والفنادق.jpeg", 
      Partner: "شركة لاروز لإدارة المطاعم والفنادق",
      info: ``,
      divElement: 'laroz'
    },
    { 
      img: "assets/images/soro/فندق شهرزاد2019_1_12_16_58_36_168.jpg", 
      Partner: "فندق شهرزاد ",
      info: `تدريب على جميع أعمال السياحة والفنادق بتاريخ 17-01-2004`,
      divElement: 'sharazad'
    },
    { 
      img: "assets/images/soro/فندق سى جاردن.jpg", 
      Partner: "فندق سى جاردن – الغردقة",
      info: `تدريب على جميع أعمال السياحة والفنادق بتاريخ 17-01-2004`,
      divElement: 'seagarden'
    },
    { 
      img: "assets/images/soro/dummy.jpg", 
      Partner: "قرية جولدن فايف السياحية",
      info: `تدريب على جميع أعمال السياحة والفنادق بتاريخ 18-01-2004`,
      divElement: 'goldenFive'
    },
    { 
      img: "assets/images/soro/فندق أبروتيل أرابيلا – الغردقة.jpg", 
      Partner: "فندق أبروتيل أرابيلا – الغردقة",
      info: `تدريب على جميع أعمال السياحة والفنادق بتاريخ 17-01-2004`,
      divElement: 'arabella'
    },
    { 
      img: "assets/images/soro/dummy.jpg", 
      Partner: "جمعية رساله – مستشفى رسالة ",
      info: ``,
      divElement: 'resala'
    },
    { 
      img: "assets/images/soro/dummy.jpg", 
      Partner: "مستشفى الريان التخصصى",
      info: ``,
      divElement: 'rayan'
    },
    { 
      img: "assets/images/soro/dummy.jpg", 
      Partner: "مستشفى الحرية",
      info: ``,
      divElement: 'freedom'
    },
    { 
      img: "assets/images/soro/dummy.jpg", 
      Partner: "هيئة الأبنية التعليمية",
      info: ``,
      divElement: 'abnia'
    },
    { 
      img: "assets/images/soro/dummy.jpg", 
      Partner: "شركة باور للخدمات البترولية",
      info: ``,
      divElement: 'power'
    },
    { 
      img: "assets/images/soro/شركة ليفت للخدمات البترولية.png", 
      Partner: "شركة ليفت للخدمات البترولية",
      info: ``,
      divElement: 'left'
    },
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
    speed: 2000,
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

  videosSliderConfig = {};

  studentsTrainingSliderConfig = {};

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
    navSpeed: 2000,
  };

  responsiveOptions;
  photosResponsiveOptions;

  photos: any[] = [];

  trainingImages: string[] = [];
  trainingImagesShown: string[] = [];

  constructor(
    private modalService: BsModalService,
    public translate: TranslateService,
    private readonly route: ActivatedRoute,
    private readonly titleService: Title
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.photosResponsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

    // this.trainingImages = [
    //   '/assets/images/small-image.png',
    //   '/assets/images/small-image.png',
    //   '/assets/images/small-image.png',
    //   '/assets/images/small-image.png',
    //   '/assets/images/small-image.png',
    //   '/assets/images/small-image.png',
    //   '/assets/images/small-image.png',
    //   '/assets/images/small-image.png',
    // ]
    this.trainingImagesShown = [
      '/assets/images/big-image.png',
      '/assets/images/big-image.png',
      '/assets/images/big-image.png',
      '/assets/images/big-image.png',
      '/assets/images/big-image.png',
      '/assets/images/big-image.png',
      '/assets/images/big-image.png',
      '/assets/images/big-image.png',
    ];
  }

  ngOnInit(): void {
    // this.test()
    // this.showSlides(this.slideIndex)
    this.titleService.setTitle(this.route.snapshot.data['title']);

    this.fillVideos();
    this.fillPhotos();
    this.fillTrainingImagesPhotos();
    this.fillVideosCarousel();
    this.slides.reverse();

    this.started = Array(this.counters.length).fill(false);
    this.checkScroll();
  }

  ngAfterViewInit(): void {
    this.videosShowSlides(this.videosSlideIndex);
    this.videosStudentsTrainingShowSlides(this.trainingSlideIndex);
    this.trainingShowSlides(this.trainingSlideIndex);
    document.getElementById('videoDefaultOpen').click();
    document.getElementById('defaultOpen').click();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    this.counterSpans.forEach((span, index) => {
      const isInView = this.isInView(span.nativeElement);
      if (isInView && !this.started[index]) {
        this.started[index] = true;
        this.startCounter(index);
      }
    });
  }

  private isInView(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    console.log(rect);
    
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  private startCounter(index: number): void {
    const updateCounter = () => {
      const increment = this.counters[index].targetNumber / 200; // Adjust this number for speed

      if (this.counters[index].startNumber < this.counters[index].targetNumber) {
        this.counters[index].startNumber = Math.ceil(this.counters[index].startNumber + increment);
        setTimeout(updateCounter, 70); // Adjust this number for speed
      } else {
        this.counters[index].startNumber = this.counters[index].targetNumber;
      }
    };

    updateCounter();
  }

  fillVideosCarousel() {
    this.videosSliderConfig = {
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

    this.studentsTrainingSliderConfig = {
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
  }

  openVideoTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('videoTabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.height = '0';
      tabcontent[i].style.padding = '0';
    }
    tablinks = document.getElementsByClassName('videoTablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.height = '100%';
    document.getElementById(tabName).style.padding = '6px 12px';
    evt.currentTarget.className += ' active';
    this.fillVideosCarousel();
  }

  openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
  }

  videosCurrentSlide(n) {
    this.videosShowSlides((this.videosSlideIndex = n));
  }

  studentsVideosCurrentSlide(n) {
    this.videosStudentsTrainingShowSlides((this.studentsVideosSlideIndex = n));
  }

  currentSlide(n) {
    this.trainingShowSlides((this.trainingSlideIndex = n));
  }

  videosShowSlides(n) {
    let i;
    let slides: any = document.getElementsByClassName('videoIframe');
    let dots = document.getElementsByClassName('videoItem');
    if (n > slides.length) {
      this.videosSlideIndex = 1;
    }
    if (n < 1) {
      this.videosSlideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.videosSlideIndex - 1].style.display = 'block';
    dots[this.videosSlideIndex - 1].className += ' active';
  }

  videosStudentsTrainingShowSlides(n) {
    this.studentsVideosSlideIndex = n;
    let i;
    let slides: any = document.getElementsByClassName('studentsVideoIframe');
    let dots = document.getElementsByClassName('studentsVideoItem');

    if (n > slides.length) {
      this.studentsVideosSlideIndex = 1;
    }

    if (n < 1) {
      this.studentsVideosSlideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[this.studentsVideosSlideIndex - 1].style.display = 'block';
    dots[this.studentsVideosSlideIndex - 1].className += ' active';
  }

  trainingShowSlides(n) {
    let i;
    let slides: any = document.getElementsByClassName('galleryImg');
    let dots = document.getElementsByClassName('demo');
    console.log(slides);
    console.log(dots);
    this.trainingSlideIndex = n;
    if (n > slides.length) {
      this.trainingSlideIndex = 1;
    }
    if (n < 1) {
      this.trainingSlideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.trainingSlideIndex - 1].style.display = 'block';
    dots[this.trainingSlideIndex - 1].className += ' active';
  }

  register() {
    this.modalRef = this.modalService.show(RegisterModalComponent, {
      class: 'modal-xl modal-dialog-centered',
    });
  }

  fillTrainingImagesPhotos() {
    let imagesCount = 8;

    for (let i = 1; i <= imagesCount; i++) {
      this.trainingImages.push(`/assets/images/slider/${i}.JPG`);
    }

    console.log(this.trainingImages);
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
        video_image: 'assets/images/sliderScreens/fouad.png',
        video_name: 'المهندس فؤاد عبدالمنعم',
        video_description:
          'المهندس فؤاد عبد المنعم المدير الاداري لمؤسسة 6 أكتوبر للتنمية البشرية يحكي تاريخ إنشاء المؤسسة',
      },
      {
        id: 2,
        video_image: 'assets/images/sliderScreens/minstry-visit.png',
        video_name: 'زيارة وزير العمل',
        video_description:
          'زيارة معالي وزير العمل / حسن شحاتة للمقر الرئيسي بالجيزة',
      },
      {
        id: 3,
        video_image: 'assets/images/sliderScreens/interaction.png',
        video_name: 'التفاعل اليومي',
        video_description: 'التفاعل اليومي داخل مراكز 6 أكتوبر',
      },
      {
        id: 4,
        video_image: 'assets/images/sliderScreens/petrolium.png',
        video_name: 'مجال البترول',
        video_description:
          'مجال البترول يحتاج إلى العمل الميداني واكتساب المهارات اللازمة منك، لحجز مكانك في الوظائف الشاغرة',
      },
    ];

    this.videosStudentsTraining = [
      {
        id: 1,
        video_image: 'assets/images/sliderScreens/gerges.png',
        video_name: 'قصة نجاح جرجس مجدي',
        video_description:
          'قصة نجاح المتدرب جرجس مجدي درس المساحة والخرائط في مراكز 6 أكتوبر للتدريب المهني',
      },
      {
        id: 2,
        video_image: 'assets/images/sliderScreens/omarHany.png',
        video_name: 'قصة نجاح عمر هاني',
        video_description:
          'تجربه عمر هاني داخل مراكز 6 أكتوبر من الناحية العملية والتدريبية',
      },
      {
        id: 3,
        video_image: 'assets/images/sliderScreens/fathy.png',
        video_name: 'قصة نجاح فتحي أبو بكر',
        video_description:
          'الطالب فتحي أبو بكر تخصص تكنولوجيا المعلومات - شبكات، يحكي لنا عن تجربته داخل مراكز 6 أكتوبر',
      },
      {
        id: 4,
        video_image: 'assets/images/sliderScreens/special1.png',
        video_name: 'بما إنك خريج مميز',
        video_description: 'بما إنك خريج مميز وإتدربت معانا في مراكز 6 أكتوبر',
      },
      {
        id: 5,
        video_image: 'assets/images/sliderScreens/special2.png',
        video_name: 'بما إنك خريج مميز',
        video_description: 'بما إنك خريج مميز',
      },
      {
        id: 6,
        video_image: 'assets/images/sliderScreens/special3.png',
        video_name: 'بما إنك خريج مميز',
        video_description: 'بما إنك خريج مميز',
      },
      {
        id: 7,
        video_image: 'assets/images/sliderScreens/anwar.png',
        video_name: 'قصة نجاح محمد أنور',
        video_description:
          'قصة نجاح محمد أنور واحد من شباب كتير إتخرجوا من مراكز 6 أكتوبر للتدريب المهني',
      },
    ];

    console.log(this.videos6octoberCenter);
  }

  fillPhotos() {
    let photosLength = 8;
    let count = 0;

    for (let i = 1; i <= photosLength; i++) {
      count++;
      this.photos.push({
        image: `assets/images/slider/${i}.JPG`,
      });
    }

    console.log(this.photos);
  }

  partnerDetails(Partner: string, partnerImg: string, partnerInfo: string) {
    const initialState = {
      Partner,
      partnerImg,
      partnerInfo,
    };
    this.modalRef = this.modalService.show(PartnerDetailsComponent, {
      initialState,
      class: 'modal-xl modal-dialog-centered',
    });
  }

  afterChange(event: any): void {
    console.log(event);

    this.currentCenterIndex = event.currentSlide + 2; // Adjust for centering logic
  }
}
