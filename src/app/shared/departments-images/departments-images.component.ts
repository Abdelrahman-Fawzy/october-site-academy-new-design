import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-departments-images',
  templateUrl: './departments-images.component.html',
  styleUrls: ['./departments-images.component.scss']
})
export class DepartmentsImagesComponent implements OnInit {

  modalRef?: BsModalRef; incrementer = 0

  Departments = [
    {
      DepartImg: 'assets/images/home-welcoming/bussiness.png',
      DepartName: localStorage.getItem("currentLang") == 'ar' ? 'إدارة اعمال' : localStorage.getItem("currentLang") == 'gr' ? 'Betriebswirtschaftslehre' : 'Business Management',
      DepartLink: '/departments/bussiness-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/petrolium.png',
      DepartName: this.translate.currentLang == 'ar' ? 'خدمات بترولية' : localStorage.getItem("currentLang") == 'gr' ? 'Erdöldienstleistungen' : 'Petroleum Services',
      DepartLink: '/departments/petrol-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/medical.png',
      DepartName: this.translate.currentLang == 'ar' ? 'خدمات صحية' : localStorage.getItem("currentLang") == 'gr' ? 'Gesundheitsdienste' : 'Medical Services',
      DepartLink: '/departments/medical-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/hotels.png',
      DepartName: this.translate.currentLang == 'ar' ? 'سياحة و فنادق' : localStorage.getItem("currentLang") == 'gr' ? 'Tourismus und Hotels' : 'Tourism And Hotels',
      DepartLink: '/departments/hotels-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/journalism.png',
      DepartName: this.translate.currentLang == 'ar' ? 'صحافة و إعلام' : localStorage.getItem("currentLang") == 'gr' ? 'Mediendienste' : 'Journalism and Media',
      DepartLink: '/departments/journalism-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/it.png',
      DepartName: this.translate.currentLang == 'ar' ? 'تكنولوجيا الشبكات' : localStorage.getItem("currentLang") == 'gr' ? 'Netzwerktechnologie' : 'Information Technology',
      DepartLink: '/departments/it-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/maps.png',
      DepartName: this.translate.currentLang == 'ar' ? 'مساحة وخرائط' : localStorage.getItem("currentLang") == 'gr' ? 'Vermessungsdienste' : 'Survey And Maps',
      DepartLink: '/departments/maps-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/construction.png',
      DepartName: this.translate.currentLang == 'ar' ? 'التشييد والبناء' : localStorage.getItem("currentLang") == 'gr' ? 'Vermessungsdienste' : 'Construction',
      DepartLink: '/departments/construction-and-buildings-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/electronics.png',
      DepartName: this.translate.currentLang == 'ar' ? 'صيانة الأجهزة الإلكترونية' : localStorage.getItem("currentLang") == 'gr' ? 'Vermessungsdienste' : 'Maintenance of electronic devices',
      DepartLink: '/departments/electronics-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/analysis.png',
      DepartName: this.translate.currentLang == 'ar' ? 'التداول وتحليل الأسواق المالية' : localStorage.getItem("currentLang") == 'gr' ? 'Vermessungsdienste' : 'Trading and analysis of financial markets',
      DepartLink: '/departments/trading-and-analysis-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/care.png',
      DepartName: this.translate.currentLang == 'ar' ? 'رعاية المسنين' : localStorage.getItem("currentLang") == 'gr' ? 'Vermessungsdienste' : 'Care of the elderly',
      DepartLink: '/departments/care-of-elderly-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/graphic.png',
      DepartName: this.translate.currentLang == 'ar' ? 'تكنولوجيا الجرافيك' : localStorage.getItem("currentLang") == 'gr' ? 'Vermessungsdienste' : 'Graphic Technology',
      DepartLink: '/departments/it-graphic-department'
    }
  ]

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
  };

  constructor(private modalService: BsModalService, public translate: TranslateService) { }

  ngOnInit(): void {
  }

  register() {
    this.modalRef = this.modalService.show(RegisterModalComponent, { class: 'modal-xl modal-dialog-centered' });
  }

}
