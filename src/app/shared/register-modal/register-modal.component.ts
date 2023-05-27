import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import { ToastrService } from 'ngx-toastr';
import { Register } from 'src/app/models/Register';
import { Acquaintance } from 'src/app/models/acquaintance';
import { Branches } from 'src/app/models/branches';
import { Governorates } from 'src/app/models/governorates';
import { GraduationYears } from 'src/app/models/graduationYears';
import { Qualifications } from 'src/app/models/qualifications';
import { Sections } from 'src/app/models/sections';
import { GetItemsService } from 'src/app/services/get-items.service';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {

  modalRef?: BsModalRef;
  isSubmited :boolean = false

  graduationYears : GraduationYears
  qualifications : Qualifications
  governorates : Governorates
  sections : Sections
  branches: Branches
  acquaintances: Acquaintance

  myForm;

  registerData: Register;

  constructor(
    private modalService: BsModalService,
    private getItemsService: GetItemsService,
    private registerService: RegisterService,
    // private toastr: ToastrService,
  ) {
    this.myForm = new FormGroup({
      customer_name: new FormControl('', Validators.required),
      national_id: new FormControl(''),
      qualification_id: new FormControl('', Validators.required),
      grauation_year: new FormControl(''),
      gov_id: new FormControl('', Validators.required),
      section_id: new FormControl(''),
      branch_id: new FormControl(''),
      method_of_acquaintance: new FormControl('', Validators.required),
      phone_number: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.getGraduationYears()
    this.getQualifications()
    this.getGovernorates()
    this.getSections()
    this.getBranches()
    this.getAcquaintances()

    this.reset();
  }

  closeModal() {
    this.modalService.hide();
  }

  reset() {
    this.registerData = {
      ticket_phone_number: '',
      ticket_customer_name: '',
      method_of_acquaintance: '',
      national_id: '',
      gov_id: '',
      qualification_id: '',
      branch_id: '',
      section_id: '',
      grauation_year: ''
    }
  }

  get f(){
    return this.myForm.controls;
  }

  getGraduationYears() {
    this.getItemsService.getGraduationYears().subscribe(graduationYears => {
      this.graduationYears = graduationYears
    })
  }

  getQualifications() {
    this.getItemsService.getQualifications().subscribe(qualifications => {
      this.qualifications = qualifications
    })
  }

  getGovernorates() {
    this.getItemsService.getGovernorates().subscribe(governorates => {
      this.governorates = governorates
    })
  }

  getSections() {
    this.getItemsService.getSections().subscribe(sections => {
      this.sections = sections
    })
  }

  getBranches() {
    this.getItemsService.getBranches().subscribe(branches => {
      this.branches = branches
    })
  }

  getAcquaintances() {
    this.getItemsService.getAcquaintances().subscribe(acquaintances => {
      this.acquaintances = acquaintances
    })
  }

  RegisterWithUs() {
    console.log(this.registerData);

    this.registerService.Register(this.registerData).subscribe(response => {
      console.log(response);
      this.isSubmited = true;
    }, error => {
      error.error.errors.forEach(errorValue => {
        // this.toastr.error(errorValue.value)
        this.isSubmited = false;
      })
    })
  }

}
