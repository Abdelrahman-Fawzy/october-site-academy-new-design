import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-it-graphic-department',
  templateUrl: './it-graphic-department.component.html',
  styleUrls: ['./it-graphic-department.component.scss']
})
export class ItGraphicDepartmentComponent implements OnInit {

  imagesList = []

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.fillImagedList()
  }

  fillImagedList() {
    let imagesCount = 8;

    for (let i = 1; i <= imagesCount; i++) {
      this.imagesList.push(`assets/images/departments-icons/graphic/${i}.png`)
    }
  }

}
