import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-trading-and-analysis',
  templateUrl: './trading-and-analysis.component.html',
  styleUrls: ['./trading-and-analysis.component.scss']
})
export class TradingAndAnalysisComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
