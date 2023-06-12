import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-journalism-department',
  templateUrl: './journalism-department.component.html',
  styleUrls: ['./journalism-department.component.scss']
})
export class JournalismDepartmentComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
