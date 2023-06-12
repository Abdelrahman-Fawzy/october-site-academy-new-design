import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bussiness-department',
  templateUrl: './bussiness-department.component.html',
  styleUrls: ['./bussiness-department.component.scss']
})
export class BussinessDepartmentComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
