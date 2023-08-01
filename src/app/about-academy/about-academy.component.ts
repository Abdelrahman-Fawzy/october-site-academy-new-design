import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterModalComponent } from '../shared/register-modal/register-modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-academy',
  templateUrl: './about-academy.component.html',
  styleUrls: ['./about-academy.component.scss']
})
export class AboutAcademyComponent implements OnInit {

  isFirstOpen = true;
  modalRef?: BsModalRef;
  param;

  constructor(private route: ActivatedRoute, private modalService: BsModalService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.param = params.item
    })
    if (this.param == 'vision') document.getElementById("academyVision").click();
    if (this.param == 'departments') document.getElementById("academyDepartments").click();
    if (this.param == 'acceptence') document.getElementById("academyAcceptence").click();
    if (this.param == 'partners') document.getElementById("academyPartners").click();
    if (this.param == 'jobs') document.getElementById("academyJobs").click();
    if (this.param == 'conversations') document.getElementById("academyConversations").click();

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

  register() {
    this.modalRef = this.modalService.show(RegisterModalComponent, { class: 'modal-xl modal-dialog-centered' });
  }

}
