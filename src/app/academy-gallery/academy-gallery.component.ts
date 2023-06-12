import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-academy-gallery',
  templateUrl: './academy-gallery.component.html',
  styleUrls: ['./academy-gallery.component.scss']
})
export class AcademyGalleryComponent implements OnInit {
  isFirstOpen = true;
  param;

  constructor(private route: ActivatedRoute, public translate: TranslateService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.param = params.item
    })

    console.log(this.param);

    if ( this.param == 'buildings') document.getElementById("mediaDefaultOpen").click();
    if ( this.param == 'conferences') document.getElementById("conferencesAndNews").click();
    if ( this.param == 'graduation-party') document.getElementById("parties").click();
    if ( this.param == 'training') document.getElementById("trainingS").click();

    // document.getElementById("mediaDefaultOpen").click();
  }

  openTab(evt, tabName) {
    var i, tabcontent, tablinks, specificItem;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    if (tabName == 'buildings') {
      specificItem = document.getElementsByClassName("specific-branch");
      for (i = 0; i < specificItem.length; i++) {
        specificItem[i].style.display = "none";
      }
    }
    if (tabName == 'conferences') {
      specificItem = document.getElementsByClassName("specific-article");
      for (i = 0; i < specificItem.length; i++) {
        specificItem[i].style.display = "none";
      }
    }
    if (tabName == 'graduation-party') {
      specificItem = document.getElementsByClassName("specific-class");
      for (i = 0; i < specificItem.length; i++) {
        specificItem[i].style.display = "none";
      }
    }
    if (tabName == 'training') {
      specificItem = document.getElementsByClassName("specific-training");
      for (i = 0; i < specificItem.length; i++) {
        specificItem[i].style.display = "none";
      }
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById('all-branches').style.display = 'block'
    document.getElementById('all-articles').style.display = 'block'
    document.getElementById('all-classes').style.display = 'block'
    document.getElementById('all-trainings').style.display = 'block'
    evt.target.classList.add('active');
  }

  openBranch(tabName) {
    var i, specificBranch;
    specificBranch = document.getElementsByClassName("specific-branch");
    for (i = 0; i < specificBranch.length; i++) {
      specificBranch[i].style.display = "none";
    }
    document.getElementById('all-branches').style.display = 'none'

    document.getElementById(tabName).style.display = "block";
  }

  openArticle(tabName) {
    var i, specificArticle;
    specificArticle = document.getElementsByClassName("specific-article");
    for (i = 0; i < specificArticle.length; i++) {
      specificArticle[i].style.display = "none";
    }
    document.getElementById('all-articles').style.display = 'none'

    document.getElementById(tabName).style.display = "block";
  }

  openClass(tabName) {
    var i, specificClass;
    specificClass = document.getElementsByClassName("specific-class");
    for (i = 0; i < specificClass.length; i++) {
      specificClass[i].style.display = "none";
    }
    document.getElementById('all-classes').style.display = 'none'

    document.getElementById(tabName).style.display = "block";
  }

  openTraining(tabName) {
    var i, specificTraining;
    specificTraining = document.getElementsByClassName("specific-training");
    for (i = 0; i < specificTraining.length; i++) {
      specificTraining[i].style.display = "none";
    }
    document.getElementById('all-trainings').style.display = 'none'

    document.getElementById(tabName).style.display = "block";
  }
}
