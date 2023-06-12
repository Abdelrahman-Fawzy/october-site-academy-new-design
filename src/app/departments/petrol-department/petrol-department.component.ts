import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-petrol-department',
  templateUrl: './petrol-department.component.html',
  styleUrls: ['./petrol-department.component.scss']
})
export class PetrolDepartmentComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
