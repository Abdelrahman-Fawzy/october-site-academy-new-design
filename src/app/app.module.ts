import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutAcademyComponent } from './about-academy/about-academy.component';
import { PetrolDepartmentComponent } from './departments/petrol-department/petrol-department.component';
import { DepartmentHeaderComponent } from './departments/shared/department-header/department-header.component';
import { TrainingGalleryComponent } from './departments/shared/training-gallery/training-gallery.component';
import { JoinComponent } from './departments/shared/join/join.component';
import { MapsDepartmentComponent } from './departments/maps-department/maps-department.component';
import { MedicalDepartmentComponent } from './departments/medical-department/medical-department.component';
import { ItDepartmentComponent } from './departments/it-department/it-department.component';
import { BussinessDepartmentComponent } from './departments/bussiness-department/bussiness-department.component';
import { HotelsDepartmentComponent } from './departments/hotels-department/hotels-department.component';
import { JournalismDepartmentComponent } from './departments/journalism-department/journalism-department.component';
import { StudyingSystemComponent } from './studying-system/studying-system.component';
import { BranchesComponent } from './shared/branches/branches.component';
import { DepartmentsImagesComponent } from './shared/departments-images/departments-images.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GraduatesComponent } from './graduates/graduates.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AcademyGalleryComponent } from './academy-gallery/academy-gallery.component';
import { RegisterModalComponent } from './shared/register-modal/register-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToTopButtonComponent } from './shared/to-top-button/to-top-button.component'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ItGraphicDepartmentComponent } from './departments/it-graphic-department/it-graphic-department.component';
import { ToastrModule } from 'ngx-toastr';
import { IntroduceToJobComponent } from './about-academy/introduce-to-job/introduce-to-job.component';
import { ConstructionAndBuildingsComponent } from './departments/construction-and-buildings/construction-and-buildings.component';
import { ElectronicsComponent } from './departments/electronics/electronics.component';
import { TradingAndAnalysisComponent } from './departments/trading-and-analysis/trading-and-analysis.component';
import { CareOfElderlyComponent } from './departments/care-of-elderly/care-of-elderly.component';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared/shared.module';
import { BiographyComponent } from './about-academy/biography/biography.component';
import { ChairmanSpeechComponent } from './about-academy/chairman-speech/chairman-speech.component';
import { VisionComponent } from './about-academy/vision/vision.component';
import { PartnersComponent } from './about-academy/partners/partners.component';
import { PartnerDetailsComponent } from './shared/partner-details/partner-details.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { CommonQuestionsComponent } from './common-questions/common-questions.component';
import { MinistryOfLaborVisitComponent } from './ministry-of-labor-visit/ministry-of-labor-visit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutAcademyComponent,
    PetrolDepartmentComponent,
    DepartmentHeaderComponent,
    TrainingGalleryComponent,
    JoinComponent,
    MapsDepartmentComponent,
    MedicalDepartmentComponent,
    ItDepartmentComponent,
    BussinessDepartmentComponent,
    HotelsDepartmentComponent,
    JournalismDepartmentComponent,
    StudyingSystemComponent,
    BranchesComponent,
    DepartmentsImagesComponent,
    ContactUsComponent,
    GraduatesComponent,
    AcademyGalleryComponent,
    RegisterModalComponent,
    ToTopButtonComponent,
    ItGraphicDepartmentComponent,
    IntroduceToJobComponent,
    ConstructionAndBuildingsComponent,
    ElectronicsComponent,
    TradingAndAnalysisComponent,
    CareOfElderlyComponent,
    BiographyComponent,
    ChairmanSpeechComponent,
    VisionComponent,
    PartnersComponent,
    PartnerDetailsComponent,
    RecruitmentComponent,
    CommonQuestionsComponent,
    MinistryOfLaborVisitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    AccordionModule,
    CarouselModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    ButtonModule,
    SharedModule,
    ToastrModule.forRoot({
      positionClass: localStorage.getItem('currentLang') == 'ar' ? 'toast-bottom-right' : 'toast-bottom-left'
    }),
    TranslateModule.forRoot({
      defaultLanguage: "ar",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
