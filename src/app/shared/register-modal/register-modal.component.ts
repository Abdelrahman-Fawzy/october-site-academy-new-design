import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
// import { ToastrService } from 'ngx-toastr';
import { Register } from 'src/app/models/Register';
import { Acquaintance } from 'src/app/models/acquaintance';
import { Branches } from 'src/app/models/branches';
import { Countries } from 'src/app/models/countries';
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
  isSubmited: boolean = false

  graduationYears: GraduationYears
  qualifications: Qualifications
  countries: Countries
  governorates: Governorates
  sections: Sections
  branches: Branches
  acquaintances: Acquaintance

  myForm;

  registerData: Register;

  studentNationality = 'egyptian'

  conutryCode = 20
  countryIndex;
  countryCode;
  formSubmitted = false

  constructor(
    private modalService: BsModalService,
    private getItemsService: GetItemsService,
    private registerService: RegisterService,
    private toastr: ToastrService,
    public translate: TranslateService
  ) {
    this.myForm = new FormGroup({
      customer_name: new FormControl('', Validators.required),
      national_id: new FormControl(''),
      qualification_id: new FormControl('', Validators.required),
      grauation_year: new FormControl(''),
      country_id: new FormControl('', Validators.required),
      gov_id: new FormControl('', Validators.required),
      section_id: new FormControl(''),
      branch_id: new FormControl(''),
      method_of_acquaintance: new FormControl('', Validators.required),
      phone_number: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.getGraduationYears()
    this.getQualifications()
    this.getCountries()
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
      country_id: '',
      gov_id: '',
      qualification_id: '',
      branch_id: '',
      section_id: '',
      grauation_year: ''
    }
  }

  get f() {
    return this.myForm.controls;
  }

  getGraduationYears() {
    this.getItemsService.getGraduationYears().subscribe(graduationYears => {
      this.graduationYears = graduationYears
    })
  }

  getQualifications() {
    this.getItemsService.getQualifications().subscribe(qualifications => {
      console.log(qualifications);

      this.qualifications = qualifications
    })
  }

  getCountries() {
    this.getItemsService.getCountries().subscribe(countries => {
      this.countries = countries
      this.getCountryCode(50)
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

  showGovernorate() {
    this.studentNationality = 'egyptian'
    this.getCountryCode(50)
  }

  showNationality() {
    this.studentNationality = 'foreign'
  }

  getCountryCode(code?: any) {
    if (this.studentNationality == 'egyptian') {
      this.countryIndex = this.countries.data.list.findIndex(object => {
        return object.id == code
      })
      this.countryCode = this.countries.data.list[this.countryIndex].phone_code
    } else {
      this.countryIndex = this.countries.data.list.findIndex(object => {
        return object.id == Number(this.registerData.country_id)
      })
      this.countryCode = this.countries.data.list[this.countryIndex].phone_code
    }

  }

  onlyNumbers(event) {
    let regEx = /^[0-9]+$/
    if (!regEx.test(event.key)) event.preventDefault()
  }

  RegisterWithUs() {

    this.formSubmitted = true

    if (this.registerData.ticket_phone_number.indexOf(this.countryCode) == -1) {
      this.registerData.ticket_phone_number = this.countryCode + this.registerData.ticket_phone_number
    }

    this.registerService.Register(this.registerData).subscribe(response => {
      this.isSubmited = true;
    }, error => {
      error.error.errors.forEach(errorValue => {
        this.toastr.error(errorValue.value)
        this.isSubmited = false;
      })
    })
  }

}
