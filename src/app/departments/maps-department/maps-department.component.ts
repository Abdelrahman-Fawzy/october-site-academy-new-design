import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-maps-department',
  templateUrl: './maps-department.component.html',
  styleUrls: ['./maps-department.component.scss']
})
export class MapsDepartmentComponent implements OnInit {

  imagesList = []

  constructor(public translate: TranslateService) { 
  }

  ngOnInit(): void {
    this.fillImagedList()
  }

  fillImagedList() {
    let imagesCount = 24;

    for (let i = 1; i <= imagesCount; i++) {
      this.imagesList.push(`assets/images/departments-icons/maps/${i}.png`)
    }
  }

}
