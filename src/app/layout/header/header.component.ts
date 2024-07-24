import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterModalComponent } from 'src/app/shared/register-modal/register-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  modalRef?: BsModalRef;
  currentLang: string

  constructor(private modalService: BsModalService, public translate: TranslateService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    if(!localStorage.getItem('currentLang')) {
      localStorage.setItem('currentLang', 'ar')
      this.currentLang = localStorage.getItem("currentLang")
    }
    this.currentLang = localStorage.getItem("currentLang") || "ar";
    this.translate.use(this.currentLang)
  }

  register() {
    this.modalRef = this.modalService.show(RegisterModalComponent, { class: 'modal-xl modal-dialog-centered' });
  }

  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
    this.document.documentElement.lang = localStorage.getItem("currentLang");
    window.location.reload();
  }

}
