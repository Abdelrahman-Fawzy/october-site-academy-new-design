import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterModalComponent } from '../shared/register-modal/register-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { IntroduceToJobComponent } from './introduce-to-job/introduce-to-job.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-academy',
  templateUrl: './about-academy.component.html',
  styleUrls: ['./about-academy.component.scss']
})
export class AboutAcademyComponent implements OnInit {

  isFirstOpen = true;
  modalRef?: BsModalRef;
  param;

  constructor(private route: ActivatedRoute, private modalService: BsModalService, public translate: TranslateService,
    private readonly titleService: Title) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.param = params.item
    })
    if (this.param == 'vision') document.getElementById("academyVision").click();
    if (this.param == 'departments') document.getElementById("academyDepartments").click();
    if (this.param == 'acceptence') document.getElementById("academyAcceptence").click();
    if (this.param == 'partners') document.getElementById("academyPartners").click();
    if (this.param == 'jobs') document.getElementById("academyJobs").click();
    if (this.param == 'conversations') document.getElementById("academyConversations").click();

    document.getElementById("defaultChildOpen").click();
    this.titleService.setTitle(this.route.snapshot.data['title'])
  }

  openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.target.classList.add('active');
  }

  openChildTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("childTabContents");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("ChildTabLinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.target.classList.add('active');
  }

  register() {
    this.modalRef = this.modalService.show(RegisterModalComponent, { class: 'modal-xl modal-dialog-centered' });
  }

  introduceToJob() {
    this.modalRef = this.modalService.show(IntroduceToJobComponent, { class: 'modal-xl modal-dialog-centered' });
  }

  jobs = [
    {
      jobName: this.translate.currentLang == 'ar' ? 'رئيس فرع المؤسسة' : `Head of the institution's branch`,
      code: 'L41BR'
    },
    {
      jobName: this.translate.currentLang == 'ar' ? 'رئيس وحدة الموارد البشرية بالمؤسسة' : `Head of the organization's human resources unit`,
      code: 'L42HR'
    },
    {
      jobName: this.translate.currentLang == 'ar' ? 'رئيس وحدة الترويج والتنسيق والتسجيل' : `Head of the Promotion, Coordination and Registration Unit`,
      code: 'L43SAL'
    },
    {
      jobName: this.translate.currentLang == 'ar' ? 'مسئول ترويج و مبيعات عبر الشبكة' : 'Network promotion and sales officer',
      code: 'L44TS'
    },
    {
      jobName: this.translate.currentLang == 'ar' ? 'رئيس وحدة التدريب الميدانى' : `Head of the field training unit`,
      code: 'L45FT'
    },
    {
      jobName: this.translate.currentLang == 'ar' ? 'محاسب' : `accountant`,
      code: 'L46AC'
    },
    {
      jobName: this.translate.currentLang == 'ar' ? 'مسئول جرافيكس ديزاين' : `Graphics Design Responsible`,
      code: 'L47BR'
    }
  ]

  sliderConfig = {
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
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
