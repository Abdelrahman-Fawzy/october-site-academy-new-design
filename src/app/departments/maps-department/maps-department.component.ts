import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-maps-department',
  templateUrl: './maps-department.component.html',
  styleUrls: ['./maps-department.component.scss']
})
export class MapsDepartmentComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
