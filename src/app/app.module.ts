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
    AcademyGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    AccordionModule,
    CarouselModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
