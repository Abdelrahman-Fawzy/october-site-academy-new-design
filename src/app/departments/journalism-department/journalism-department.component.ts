import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-journalism-department',
  templateUrl: './journalism-department.component.html',
  styleUrls: ['./journalism-department.component.scss']
})
export class JournalismDepartmentComponent implements OnInit {

  imagesList = []

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.fillImagedList()
  }

  fillImagedList() {
    let imagesCount = 27;

    for (let i = 1; i <= imagesCount; i++) {
      this.imagesList.push(`assets/images/departments-icons/media/${i}.png`)
    }
  }

}
