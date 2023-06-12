import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterModalComponent } from 'src/app/shared/register-modal/register-modal.component';

@Component({
  selector: 'app-department-header',
  templateUrl: './department-header.component.html',
  styleUrls: ['./department-header.component.scss']
})
export class DepartmentHeaderComponent implements OnInit {

  @Input('departName') departName;
  @Input('departImg') departImg;
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService, public translate: TranslateService) {}

  ngOnInit(): void {
  }

  register() {
    this.modalRef = this.modalService.show(RegisterModalComponent, {class: 'modal-xl modal-dialog-centered'});
  }

}
