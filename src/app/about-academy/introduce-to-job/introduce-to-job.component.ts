import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { JobIntroduce } from 'src/app/models/jobs';
import { map } from 'rxjs/operators'
import { IntroduceToJobService } from 'src/app/services/introduce-to-job.service';

@Component({
  selector: 'app-introduce-to-job',
  templateUrl: './introduce-to-job.component.html',
  styleUrls: ['./introduce-to-job.component.scss']
})
export class IntroduceToJobComponent implements OnInit {

  modalRef?: BsModalRef;
  @Input() jobCode

  jobForm!: FormGroup;
  formValues: JobIntroduce;
  formValid: boolean = false
  formSubmitted: boolean = false
  uploads: FileUploadModel;

  myFiles: File[] = []

  papersToSend = []
  isSubmited: boolean = false

  constructor(
    private modalService: BsModalService, 
    private fb: FormBuilder, 
    private toastr: ToastrService, 
    public translate: TranslateService, 
    private http: HttpClient,
    private introduceToJobService: IntroduceToJobService) { }

  ngOnInit(): void {
    console.log(this.jobCode);
    
    this.createForm()
    this.uploads = {
      uploads: undefined,
      type: 'normal'
    }
  }

  handleFileInput(event: any) {
    if (event.target.id == 'nationalId') {
      const nationalId = document.getElementById('nationalId-chosen');
      nationalId!.textContent = event.target.files[0].name;
    }

    if (event.target.id == 'qualification') {
      const qualification = document.getElementById('qualification-chosen');
      qualification!.textContent = event.target.files[0].name;
    }

    if (event.target.id == 'personalPhoto') {
      const personalPhoto = document.getElementById('personal-photo-chosen');
      personalPhoto!.textContent = event.target.files[0].name;
    }

    if (event.target.id == 'cv') {
      const cv = document.getElementById('cv-chosen');
      cv!.textContent = event.target.files[0].name;
    }
    
    this.uploads.uploads = event.target.files[0];
    this.myFiles.push(this.uploads.uploads)
    console.log(this.myFiles);

    this.postFile(this.uploads.uploads).subscribe((res: any) => {
      console.log(res);
      if(event.target.id == 'nationalId') this.papersToSend.push(res.data.uploads + '_3');
      else if (event.target.id == 'qualification') this.papersToSend.push(res.data.uploads + '_2');
      else if (event.target.id == 'personalPhoto') this.papersToSend.push(res.data.uploads + '_8');
      else if (event.target.id == 'cv') this.papersToSend.push(res.data.uploads + '_1');
    }, err => {
      console.log(err);
    })
  }

  postFile(fileToUpload: File) {
    const endpoint = 'https://6oaerp.6ohd.com/api/erp/uploads/upload_files';
    const formData: FormData = new FormData();
    formData.append('uploads', fileToUpload, fileToUpload.name);
    formData.append('type', 'normal')
    return this.http
      .post(endpoint, formData).pipe(
        map((res) => { return res; }),
      )
}

  getFileName(event: any) {
    const fileChosen = document.getElementById('file-chosen');

    fileChosen!.textContent = event.target.files[0].name;
  }

  closeModal() {
    this.modalService.hide();
  }

  createForm() {
    console.log(this.jobCode);
    
    this.jobForm = this.fb.group({
      jprequest_name: ['', Validators.required],
      jprequest_email: ['', [Validators.required, Validators.email]],
      jprequest_phone_number: ['', Validators.required],
      jprequest_job_code: [this.jobCode]
    })
  }

  get f() {
    return this.jobForm.controls;
  }

  validateForm() {
    console.log(this.jobForm);
    
    if (
      !this.formValues.jprequest_name || 
      !this.formValues.jprequest_email || 
      !this.formValues.jprequest_phone_number ||
      this.papersToSend.length == 0) {
      this.toastr.error(this.translate.currentLang == 'ar' ? 'تأكد من جميع البيانات المطلوبة' : 'confirm for all values')
      this.formValid = false
    } else if (this.jobForm.invalid) {
      this.toastr.error(this.translate.currentLang == 'ar' ? 'هناك خطأ ما, تأكد من جميع البيانات' : 'there is an error, check all data')
      this.formValid = false
    } else {
      this.formValid = true
    }
    return this.formValid
  }

  submitForm() {
    this.formSubmitted = true
    this.formValues = this.jobForm.value as JobIntroduce

    let dataToSend = {
      jprequest_name: this.formValues.jprequest_name,
      jprequest_email: this.formValues.jprequest_email,
      jprequest_phone_number: this.formValues.jprequest_phone_number,
      jprequest_job_code: this.formValues.jprequest_job_code,
      papers: this.papersToSend.join(", ")
    } as JobIntroduce

    console.log(dataToSend);
    console.log(this.formValues);
    console.log(this.papersToSend);
    
    

    if (this.validateForm()) {
      this.introduceToJobService.introduceToJob(dataToSend).subscribe(response => {
        console.log(response, 'response');
        this.toastr.success(this.translate.currentLang == 'ar'? 'تم التقدم بنجاح' :'successfully')
        this.jobForm.reset()
        this.papersToSend = [];
        this.formSubmitted = false
        this.isSubmited = true;
      }, err => {
        console.log(err.error.errors);
        err.error?.errors.forEach(errorValue => {
          this.toastr.error(errorValue.value)
          this.isSubmited = false;
        })
      })
    }
  }

}

export class FileUploadModel {
  uploads!: File;
  type: string;
}
