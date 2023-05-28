import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterModalComponent } from '../register-modal/register-modal.component';

@Component({
  selector: 'app-departments-images',
  templateUrl: './departments-images.component.html',
  styleUrls: ['./departments-images.component.scss']
})
export class DepartmentsImagesComponent implements OnInit {

  modalRef?: BsModalRef;incrementer = 0

  Departments = [
    {
      DepartImg: 'assets/images/home-welcoming/bussiness.png',
      DepartName: 'إدارة اعمال',
      DepartLink: '/departments/bussiness-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/petrolium.png',
      DepartName: 'خدمات بترولية',
      DepartLink: '/departments/petrol-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/medical.png',
      DepartName: 'خدمات صحية',
      DepartLink: '/departments/medical-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/hotels.png',
      DepartName: 'سياحة و فنادق',
      DepartLink: '/departments/hotels-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/journalism.png',
      DepartName: 'صحافة و اعلام',
      DepartLink: '/departments/journalism-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/it.png',
      DepartName: 'تكنولوجيا المعلومات',
      DepartLink: '/departments/it-department'
    },
    {
      DepartImg: 'assets/images/home-welcoming/maps.png',
      DepartName: 'مساحة و خرائط',
      DepartLink: '/departments/maps-department'
    },
  ]

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }

  register() {
    this.modalRef = this.modalService.show(RegisterModalComponent, {class: 'modal-xl modal-dialog-centered'});
  }

}
