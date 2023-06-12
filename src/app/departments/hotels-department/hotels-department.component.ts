import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hotels-department',
  templateUrl: './hotels-department.component.html',
  styleUrls: ['./hotels-department.component.scss']
})
export class HotelsDepartmentComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
