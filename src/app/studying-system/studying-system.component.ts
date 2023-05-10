import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studying-system',
  templateUrl: './studying-system.component.html',
  styleUrls: ['./studying-system.component.scss']
})
export class StudyingSystemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('defaultOpen').click();
  }

  openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("system-content__body");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active')
    }
    document.getElementById(tabName).style.display = "block";
    evt.target.classList.add('active');
  }

}
