import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutAcademyComponent } from './about-academy/about-academy.component';
import { PetrolDepartmentComponent } from './departments/petrol-department/petrol-department.component';
import { MapsDepartmentComponent } from './departments/maps-department/maps-department.component';
import { MedicalDepartmentComponent } from './departments/medical-department/medical-department.component';
import { ItDepartmentComponent } from './departments/it-department/it-department.component';
import { BussinessDepartmentComponent } from './departments/bussiness-department/bussiness-department.component';
import { HotelsDepartmentComponent } from './departments/hotels-department/hotels-department.component';
import { JournalismDepartmentComponent } from './departments/journalism-department/journalism-department.component';
import { StudyingSystemComponent } from './studying-system/studying-system.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GraduatesComponent } from './graduates/graduates.component';
import { AcademyGalleryComponent } from './academy-gallery/academy-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'about-academy',
    component: AboutAcademyComponent,
    pathMatch: 'full'
  },
  {
    path: 'departments/petrol-department',
    component: PetrolDepartmentComponent,
    pathMatch: 'full'
  },
  {
    path: 'departments/maps-department',
    component: MapsDepartmentComponent,
    pathMatch: 'full'
  },
  {
    path: 'departments/medical-department',
    component: MedicalDepartmentComponent,
    pathMatch: 'full'
  },
  {
    path: 'departments/it-department',
    component: ItDepartmentComponent,
    pathMatch: 'full'
  },
  {
    path: 'departments/bussiness-department',
    component: BussinessDepartmentComponent,
    pathMatch: 'full'
  },
  {
    path: 'departments/hotels-department',
    component: HotelsDepartmentComponent,
    pathMatch: 'full'
  },
  {
    path: 'departments/journalism-department',
    component: JournalismDepartmentComponent,
    pathMatch: 'full'
  },
  {
    path: 'academy-gallery',
    component: AcademyGalleryComponent,
    pathMatch: 'full'
  },
  {
    path: 'studying-system',
    component: StudyingSystemComponent,
    pathMatch: 'full'
  },
  {
    path: 'graduates',
    component: GraduatesComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
