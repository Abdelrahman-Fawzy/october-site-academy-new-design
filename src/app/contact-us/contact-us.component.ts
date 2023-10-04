import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ContactUsService } from '../services/contact-us.service';
import { ContactUs } from '../models/contactUs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  contactValues: ContactUs;
  formValid: boolean = false
  formSubmitted: boolean = false

  constructor(
    public translate: TranslateService, 
    private readonly route: ActivatedRoute,
    private readonly titleService: Title,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private contactUsService: ContactUsService
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.route.snapshot.data['title'])
    this.createForm()
  }

  createForm() {
    this.contactForm = this.fb.group({
      contact_name: ['', Validators.required],
      contact_email: ['', [Validators.required, Validators.email]],
      contact_message: ['', [Validators.required]]
    })
  }

  get f() {
    return this.contactForm.controls;
  }

  validateForm() {
    console.log(this.contactForm);
    
    if (!this.contactValues.contact_name || !this.contactValues.contact_email || !this.contactValues.contact_message) {
      this.toastr.error(this.translate.currentLang == 'ar' ? 'تأكد من جميع البيانات المطلوبة' : 'confirm for all values')
      this.formValid = false
    } else if (this.contactForm.invalid) {
      this.toastr.error(this.translate.currentLang == 'ar' ? 'هناك خطأ ما, تأكد من جميع البيانات' : 'there is an error, check all data')
      this.formValid = false
    } else {
      this.formValid = true
    }
    return this.formValid
  }

  submitForm() {
    this.formSubmitted = true
    this.contactValues = this.contactForm.value as ContactUs

    let dataToSend = {
      contact_name: this.contactValues.contact_name,
      contact_email: this.contactValues.contact_email,
      contact_message: this.contactValues.contact_message
    } as ContactUs

    if (this.validateForm()) {
      this.contactUsService.ContactUs(dataToSend).subscribe(response => {
        console.log(response, 'response');
        this.toastr.success(this.translate.currentLang == 'ar'? 'تم ارسال الرسالة بنجاح' :'message sent successfully')
        this.contactForm.reset()
        this.formSubmitted = false
      }, err => {
        console.log(err.error.errors);
        // this.toastr.error(this.translate.currentLang == 'ar' ? 'حدث خطأ ما' : 'There was an error sending')
        err.error?.errors.forEach(errorValue => {
          this.toastr.error(errorValue.value)
        })
      })
    }
  }

}
