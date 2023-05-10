import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-academy',
  templateUrl: './about-academy.component.html',
  styleUrls: ['./about-academy.component.scss']
})
export class AboutAcademyComponent implements OnInit {

  isFirstOpen = true;

  constructor() { }

  ngOnInit(): void {
    document.getElementById("defaultOpen").click();
    document.getElementById("defaultChildOpen").click();
  }

  openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.target.classList.add('active');
  }

  openChildTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("childTabContents");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("ChildTabLinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.target.classList.add('active');
  }

}
