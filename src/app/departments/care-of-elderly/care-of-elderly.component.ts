import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-care-of-elderly',
  templateUrl: './care-of-elderly.component.html',
  styleUrls: ['./care-of-elderly.component.scss']
})
export class CareOfElderlyComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
