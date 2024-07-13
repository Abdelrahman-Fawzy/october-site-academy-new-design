import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-it-department',
  templateUrl: './it-department.component.html',
  styleUrls: ['./it-department.component.scss']
})
export class ItDepartmentComponent implements OnInit {

  imagesList = []

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.fillImagedList()
  }

  fillImagedList() {
    let imagesCount = 12;

    for (let i = 1; i <= imagesCount; i++) {
      this.imagesList.push(`assets/images/departments-icons/it/${i}.png`)
    }
  }

}
