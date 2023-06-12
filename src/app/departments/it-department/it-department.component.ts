import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-it-department',
  templateUrl: './it-department.component.html',
  styleUrls: ['./it-department.component.scss']
})
export class ItDepartmentComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
