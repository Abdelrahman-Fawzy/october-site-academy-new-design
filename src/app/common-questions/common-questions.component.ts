import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-common-questions',
  templateUrl: './common-questions.component.html',
  styleUrls: ['./common-questions.component.scss']
})
export class CommonQuestionsComponent implements OnInit {

  isFirstOpen = true;

  constructor(public translate: TranslateService,) { }

  ngOnInit(): void {
  }

}
