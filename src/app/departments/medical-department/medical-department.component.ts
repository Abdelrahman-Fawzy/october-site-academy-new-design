import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-medical-department',
  templateUrl: './medical-department.component.html',
  styleUrls: ['./medical-department.component.scss']
})
export class MedicalDepartmentComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
