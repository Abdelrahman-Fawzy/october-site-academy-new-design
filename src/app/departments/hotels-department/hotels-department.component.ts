import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hotels-department',
  templateUrl: './hotels-department.component.html',
  styleUrls: ['./hotels-department.component.scss']
})
export class HotelsDepartmentComponent implements OnInit {

  imagesList = []

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.fillImagedList()
  }

  fillImagedList() {
    let imagesCount = 21;

    for (let i = 1; i <= imagesCount; i++) {
      this.imagesList.push(`assets/images/departments-icons/hotels/${i}.png`)
    }
  }

}
