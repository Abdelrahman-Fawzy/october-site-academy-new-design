import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-construction-and-buildings',
  templateUrl: './construction-and-buildings.component.html',
  styleUrls: ['./construction-and-buildings.component.scss']
})
export class ConstructionAndBuildingsComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
