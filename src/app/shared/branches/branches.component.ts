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
        directions: "https://www.google.com/maps/place/6+October+Academy%D8%8C+%D8%A8%D8%AC%D9%88%D8%A7%D8%B1+%D9%85%D8%B7%D8%B9%D9%85+%D8%A8%D8%A7%D8%B2%D9%88%D9%83%D8%A7%D8%8C+232+%D8%B4+%D8%A7%D9%84%D9%87%D8%B1%D9%85+%D9%85%D8%AD%D8%B7%D8%A9+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%B6%D9%8A%D8%A7%D8%A1,+Al+Haram%E2%80%AD/data=!4m2!3m1!1s0x145847b4118eae8d:0x81d4c2af1e40bba5?utm_source=mstt_1&entry=gps&lucs=47068615&g_ep=CAESCTExLjg3LjMwNBgAINeCAyoINDcwNjg2MTVCAkVH"
      },
      {
        branch_name: "QALYUBIA_BRANCH",
        license: "رخصة رقم 1 لعام 2024 من وزارة العمل",
        branch_address: "QALYUBIA_BRANCH_ADDRESS",
        whatsapp_number: "01000005387",
        email_address: "6oa.Haram@6oHD.CoM",
        directions: "https://www.google.com/maps/place/%D8%A7%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9+6+%D8%A7%D9%83%D8%AA%D9%88%D8%A8%D8%B1+%D8%A8%D8%B4%D8%A8%D8%B1%D8%A7+%D8%A7%D9%84%D8%AE%D9%8A%D9%85%D8%A9%D8%8C+%D8%B4%D8%A7%D8%B1%D8%B9+15+%D9%85%D8%A7%D9%8A%D9%88+(+%D8%A7%D9%84%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF+%D8%A8%D8%AC%D9%88%D8%A7%D8%B1+%D8%AC%D8%A7%D9%85%D8%B9+%D8%A7%D8%A8%D9%88+%D8%A7%D9%84%D9%87%D9%86%D8%A7,+Al+Qalyubia+Governorate%E2%80%AD/data=!4m2!3m1!1s0x145815e2a07648c5:0xc28990af68e0f6ad?utm_source=mstt_1&entry=gps&lucs=47068615&g_ep=CAESCTExLjg3LjMwNBgAINeCAyoINDcwNjg2MTVCAkVH"
      },
      {
        branch_name: "GHARBIA_BRANCH",
        license: "رخصة رقم 1 لعام 2024 من وزارة العمل",
        branch_address: "GHARBIA_BRANCH_ADDRESS",
        whatsapp_number: "01000005387",
        email_address: "6oa.Haram@6oHD.CoM",
        directions: "https://www.google.com/maps/place/%D8%A7%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9+6+%D8%A7%D9%83%D8%AA%D9%88%D8%A8%D8%B1+%D8%A8%D8%B7%D9%86%D8%B7%D8%A7%D8%8C+%D9%85%D9%88%D8%AF%D8%B1%D9%86+%D8%B3%D9%83%D9%88%D9%84%D8%8C+%D8%A7%D9%84%D8%B4%D9%87%D9%8A%D8%AF+%D8%A3%D8%A8%D9%88+%D8%B2%D9%87%D8%B1%D8%A9+%D9%86%D8%A7%D9%8A%D9%81+%D8%B9%D9%85%D8%A7%D8%AF+%D8%B3%D8%A7%D8%A8%D9%82%D9%8B%D8%A7+%D8%A8%D8%AC%D9%88%D8%A7%D8%B1,+Gharbia+Governorate%E2%80%AD/data=!4m2!3m1!1s0x14f7c9dd193d6f73:0x432106056ed9c9c4?utm_source=mstt_1&entry=gps&lucs=47068615&g_ep=CAESCTExLjg3LjMwNBgAINeCAyoINDcwNjg2MTVCAkVH"
      },
      {
        branch_name: "BENHA_BRANCH",
        license: "رخصة رقم 1 لعام 2024 من وزارة العمل",
        branch_address: "BENHA_BRANCH_ADDRESS",
        whatsapp_number: "01000005387",
        email_address: "6oa.Haram@6oHD.CoM",
        directions: "https://www.google.com/maps/place/%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9+6+%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1+%D8%A8%D8%A8%D9%86%D9%87%D8%A7%D8%8C+%D9%83%D9%88%D8%B1%D9%86%D9%8A%D8%B4+%D8%A7%D9%84%D9%86%D9%8A%D9%84%D8%8C+%D8%AD%D9%89+%D8%A7%D9%84%DA%A4%D9%84%D9%84%D8%8C+%D8%A8%D8%AC%D9%88%D8%A7%D8%B1+%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%D8%AD%D8%A9+%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%8C+%D8%B4%D8%A7%D8%B1%D8%B9+Street+2,+Banha,+Al+Qalyubia+Governorate+13511%E2%80%AD/data=!4m2!3m1!1s0x14f7df47cfe3f831:0x5c18760be147d389?utm_source=mstt_1&entry=gps&lucs=47068615&g_ep=CAESCTExLjg3LjMwNBgAINeCAyoINDcwNjg2MTVCAkVH"
      }
    ]

    console.log(this.branches);
    
  }

}
