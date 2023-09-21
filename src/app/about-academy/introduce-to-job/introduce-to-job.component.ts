import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-introduce-to-job',
  templateUrl: './introduce-to-job.component.html',
  styleUrls: ['./introduce-to-job.component.scss']
})
export class IntroduceToJobComponent implements OnInit {

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService,) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalService.hide();
  }

}
