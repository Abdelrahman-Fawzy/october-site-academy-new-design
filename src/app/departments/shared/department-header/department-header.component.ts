import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-header',
  templateUrl: './department-header.component.html',
  styleUrls: ['./department-header.component.scss']
})
export class DepartmentHeaderComponent implements OnInit {

  @Input('departName') departName;
  @Input('departImg') departImg;

  constructor() { }

  ngOnInit(): void {
  }

}
