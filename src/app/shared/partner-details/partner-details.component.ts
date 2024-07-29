import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-partner-details',
  templateUrl: './partner-details.component.html',
  styleUrls: ['./partner-details.component.scss']
})
export class PartnerDetailsComponent implements OnInit {

  modalRef?: BsModalRef;
  @Input() Partner;
  @Input() partnerImg;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    console.log(this.Partner);
    console.log(this.partnerImg);
    
  }

  closeModal() {
    this.modalService.hide();
  }

}
