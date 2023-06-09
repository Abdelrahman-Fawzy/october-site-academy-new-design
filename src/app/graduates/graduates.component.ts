import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-graduates',
  templateUrl: './graduates.component.html',
  styleUrls: ['./graduates.component.scss']
})
export class GraduatesComponent implements OnInit {

  faStar = faStar

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
