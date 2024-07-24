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

  fillBranches() {
    this.branches = [
      {
        branch_name: "GIZA_BRANCH",
        license: "رخصة رقم 1 لعام 2024 من وزارة العمل",
        branch_address: "GIZA_BRANCH_ADDRESS",
        whatsapp_number: "01000005387",
        email_address: "6oa.Haram@6oHD.CoM",
        directions: "https://maps.app.goo.gl/9DJaK94J2nAfUfb67",
        facebook_link: "https://www.facebook.com/6octoberacademy?mibextid=eQY6cl"
      },
      {
        branch_name: "QALYUBIA_BRANCH",
        license: "رخصة رقم 2 لعام 2024 من وزارة العمل",
        branch_address: "QALYUBIA_BRANCH_ADDRESS",
        whatsapp_number: "01000005387",
        email_address: "6oa.Shubra@6oHD.CoM",
        directions: "https://maps.app.goo.gl/ox3WhmSUoznjboD37",
        facebook_link: "https://www.facebook.com/6Oa.Shubra?mibextid=eQY6cl"
      },
      {
        branch_name: "GHARBIA_BRANCH",
        license: "رخصة رقم 3 لعام 2024 من وزارة العمل",
        branch_address: "GHARBIA_BRANCH_ADDRESS",
        whatsapp_number: "01000005387",
        email_address: "6oa.Tanta@6oHD.CoM",
        directions: "https://maps.app.goo.gl/MJa5ygweMaNewZqE8",
        facebook_link: "https://www.facebook.com/6octoberacademy.tanta?mibextid=eQY6cl"
      },
      {
        branch_name: "BENHA_BRANCH",
        license: "رخصة رقم 4 لعام 2024 من وزارة العمل",
        branch_address: "BENHA_BRANCH_ADDRESS",
        whatsapp_number: "01000005387",
        email_address: "6oa.Benha@6oHD.CoM",
        directions: "https://maps.app.goo.gl/Q2PtdNU8U7fjYF5",
        facebook_link: "https://www.facebook.com/6oa.Banha?mibextid=eQY6cl"
      },
      {
        branch_name: "NEW_CAIRO_BRANCH",
        license: "رخصة رقم 5 لعام 2024 من وزارة العمل",
        branch_address: "NEW_CAIRO_BRANCH_ADDRESS",
        whatsapp_number: "01000005387",
        email_address: "6oa.Haram@6oHD.CoM",
        directions: "https://maps.app.goo.gl/mTAdmRVJEfm66U2d7?g_st=iw",
        facebook_link: "https://www.facebook.com/6ohd.Heliopolis?mibextid=kFxxJD"
      }
    ]

    console.log(this.branches);
    
  }

}
