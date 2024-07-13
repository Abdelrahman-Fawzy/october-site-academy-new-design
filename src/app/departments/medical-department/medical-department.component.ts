import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-medical-department',
  templateUrl: './medical-department.component.html',
  styleUrls: ['./medical-department.component.scss']
})
export class MedicalDepartmentComponent implements OnInit {

  imagesList = []

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.fillImagedList()
  }

  fillImagedList() {
    let imagesCount = 28;

    for (let i = 1; i <= imagesCount; i++) {
      this.imagesList.push(`assets/images/departments-icons/care/${i}.png`)
    }
  }

}
