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
