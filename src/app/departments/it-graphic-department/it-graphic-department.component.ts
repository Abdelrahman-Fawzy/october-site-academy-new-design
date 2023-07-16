import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-it-graphic-department',
  templateUrl: './it-graphic-department.component.html',
  styleUrls: ['./it-graphic-department.component.scss']
})
export class ItGraphicDepartmentComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
