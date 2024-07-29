import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobsList } from '../models/jobs';
import { TranslateService } from '@ngx-translate/core';
import { IntroduceToJobComponent } from '../about-academy/introduce-to-job/introduce-to-job.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { GetItemsService } from '../services/get-items.service';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss']
})
export class RecruitmentComponent implements OnInit {

  jobs: JobsList
  JobsForm: FormGroup;
  jobCodeFormControl: FormControl
  formValid: boolean = false
  jobFormValues;
  jobDetails

  modalRef?: BsModalRef;

  sliderConfig = {
    rtl: this.translate.currentLang == 'ar' ? true : false,
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 1500,
    infinite: false,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  constructor(public translate: TranslateService, private getItemsService: GetItemsService,
    private toastr: ToastrService,  private modalService: BsModalService,) { }

  ngOnInit(): void {
    this.getJobs()

    this.JobsForm = new FormGroup({
      code: new FormControl('', Validators.required)
    })
  }

  introduceToJob() {
    let initialState = {
      jobCode: this.jobFormValues.code
    }
    this.modalRef = this.modalService.show(IntroduceToJobComponent, { initialState, class: 'modal-xl modal-dialog-centered' });
  }

  getJobs() {
    this.getItemsService.getJobs().subscribe(jobs => {
      this.jobs = jobs
      console.log(this.jobs.data.list);
    })
  }

  copyToClipBoard(code) {
    if (code != '') {
      console.log(code);
      let jobCode = document.createElement('input')
      jobCode.style.position = 'fixed'
      jobCode.style.top = '0'
      jobCode.style.left = '0'
      jobCode.style.opacity = '0'
      jobCode.value = code
      document.body.appendChild(jobCode)
      jobCode.focus()
      jobCode.select()
      document.execCommand('copy')
      document.body.removeChild(jobCode)
      this.toastr.success('copied to clipBoard')
    }
  }

  validateForm() {
    if (!this.jobFormValues.code) {
      this.toastr.error('هذا الحقل مطلوب')
      this.formValid = false
    } else {
      this.formValid = true
    }
    return this.formValid
  }

  getJob() {
    this.jobFormValues = this.JobsForm.value

    let dataToSend = {
      code: this.jobFormValues.code
    }

    if (this.validateForm()) {
      this.getItemsService.getJobByCode(dataToSend).subscribe(data => {
        console.log(data);
        this.jobDetails = data.data
      }, error => {
        console.log(error);
        error.error?.errors.forEach(errorValue => {
          this.toastr.error(errorValue.value)
        })
      })
    }
  }

}
