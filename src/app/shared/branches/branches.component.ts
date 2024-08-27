import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit, AfterViewInit {
  responsiveOptions: any[] = []
  branches;

  constructor(public translate: TranslateService, private cdr: ChangeDetectorRef) { 

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 2,
          numScroll: 2
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
  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.cdr.detectChanges()
    Promise.resolve().then(() => {
      this.fillBranches()
    })
    
  }

  branchesSliderConfig = {
    rtl: this.translate.currentLang == 'ar' ? true : false,
    dots: true,
    arrows: false,
    autoplay: true,
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

  fillBranches() {
    this.branches = [
      {
        branch_name: "KAFR_ELSHEIKH_BRANCH",
        license: "حاصل على رخصة من وزارة العمل 2024",
        branch_address: "KAFR_ELSHEIKH_BRANCH_ADDRESS",
        whatsapp_number: "01000005387",
        email_address: "kafr.el-sheikh@6ohd.com",
        directions: "https://maps.google.com/?q=31.118999,30.944769",
        facebook_link: "https://www.facebook.com/6oHD.KafrElSheikh?mibextid=kFxxJD"
      },
      {
        branch_name: "ZAGAZIG_BRANCH",
        license: "حاصل على رخصة من وزارة العمل 2024",
        branch_address: "ZAGAZIG_BRANCH_ADDRESS",
        whatsapp_number: "01000005387",
        email_address: "el-zagazig@6ohd.com",
        directions: "https://maps.google.com/?q=30.600536,31.487640",
        facebook_link: "https://www.facebook.com/6oHD.Zagazig?mibextid=kFxxJD"
      },
      {
        branch_name: "BENHA_BRANCH",
        license: "حاصل على رخصة من وزارة العمل 2024",
        branch_address: "BENHA_BRANCH_ADDRESS",
        whatsapp_number: "01000005387",
        email_address: "6oa.Benha@6oHD.CoM",
        directions: "https://maps.app.goo.gl/Q2PtdNU8U7fjYF5",
        facebook_link: "https://www.facebook.com/6oa.Banha?mibextid=eQY6cl"
      },
      {
        branch_name: "GHARBIA_BRANCH",
        license: "حاصل على رخصة من وزارة العمل 2024",
        branch_address: "GHARBIA_BRANCH_ADDRESS",
        whatsapp_number: "01000005387",
        email_address: "6oa.Tanta@6oHD.CoM",
        directions: "https://maps.app.goo.gl/MJa5ygweMaNewZqE8",
        facebook_link: "https://www.facebook.com/6octoberacademy.tanta?mibextid=eQY6cl"
      },
      {
        branch_name: "QALYUBIA_BRANCH",
        license: "حاصل على رخصة من وزارة العمل 2024",
        branch_address: "QALYUBIA_BRANCH_ADDRESS",
        whatsapp_number: "01000005387",
        email_address: "6oa.Shubra@6oHD.CoM",
        directions: "https://maps.app.goo.gl/ox3WhmSUoznjboD37",
        facebook_link: "https://www.facebook.com/6Oa.Shubra?mibextid=eQY6cl"
      },
      {
        branch_name: "NEW_CAIRO_BRANCH",
        license: "حاصل على رخصة من وزارة العمل 2024",
        branch_address: "NEW_CAIRO_BRANCH_ADDRESS",
        whatsapp_number: "01000005387",
        email_address: "misr.elgededa@6ohd.com",
        directions: "https://maps.app.goo.gl/mTAdmRVJEfm66U2d7?g_st=iw",
        facebook_link: "https://www.facebook.com/6ohd.Heliopolis?mibextid=kFxxJD"
      },
      {
        branch_name: "GIZA_BRANCH",
        license: "حاصل على رخصة من وزارة العمل 2024",
        branch_address: "GIZA_BRANCH_ADDRESS",
        whatsapp_number: "01000005387",
        email_address: "6oa.Haram@6oHD.CoM",
        directions: "https://maps.app.goo.gl/9DJaK94J2nAfUfb67",
        facebook_link: "https://www.facebook.com/6octoberacademy?mibextid=eQY6cl"
      }
    ]

    if (this.translate.currentLang == 'en') {
      this.branches.reverse();
    }

    console.log(this.branches);
    console.log(this.translate.currentLang);
    
  }

}
