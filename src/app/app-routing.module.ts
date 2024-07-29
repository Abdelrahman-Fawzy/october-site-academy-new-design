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
import { ItGraphicDepartmentComponent } from './departments/it-graphic-department/it-graphic-department.component';
import { ConstructionAndBuildingsComponent } from './departments/construction-and-buildings/construction-and-buildings.component';
import { ElectronicsComponent } from './departments/electronics/electronics.component';
import { TradingAndAnalysisComponent } from './departments/trading-and-analysis/trading-and-analysis.component';
import { CareOfElderlyComponent } from './departments/care-of-elderly/care-of-elderly.component';
import { TranslateService } from '@ngx-translate/core';
import { BiographyComponent } from './about-academy/biography/biography.component';
import { ChairmanSpeechComponent } from './about-academy/chairman-speech/chairman-speech.component';
import { VisionComponent } from './about-academy/vision/vision.component';
import { PartnersComponent } from './about-academy/partners/partners.component';

let academyName = {
  nameEn: '6th of October centers',
  nameAr: 'مراكز 6 أكتوبر'
}

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName?.nameEn : academyName.nameAr
    }
  },
  {
    path: 'biography',
    component: BiographyComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName?.nameEn : academyName.nameAr
    }
  },
  {
    path: 'chairman-speech',
    component: ChairmanSpeechComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName?.nameEn : academyName.nameAr
    }
  },
  {
    path: 'vision',
    component: VisionComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName?.nameEn : academyName.nameAr
    }
  },
  {
    path: 'partners',
    component: PartnersComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName?.nameEn : academyName.nameAr
    }
  },
  {
    path: 'about-academy',
    component: AboutAcademyComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName?.nameEn : academyName.nameAr
    }
  },
  {
    path: 'departments/petrol-department',
    component: PetrolDepartmentComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName?.nameEn : academyName.nameAr
    }
  },
  {
    path: 'departments/maps-department',
    component: MapsDepartmentComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName.nameEn : academyName.nameAr
    }
  },
  {
    path: 'departments/medical-department',
    component: MedicalDepartmentComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName.nameEn : academyName.nameAr
    }
  },
  {
    path: 'departments/it-department',
    component: ItDepartmentComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName.nameEn : academyName.nameAr
    }
  },
  {
    path: 'departments/it-graphic-department',
    component: ItGraphicDepartmentComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName.nameEn : academyName.nameAr
    }
  },
  {
    path: 'departments/bussiness-department',
    component: BussinessDepartmentComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName.nameEn : academyName.nameAr
    }
  },
  {
    path: 'departments/hotels-department',
    component: HotelsDepartmentComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName.nameEn : academyName.nameAr
    }
  },
  {
    path: 'departments/journalism-department',
    component: JournalismDepartmentComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName.nameEn : academyName.nameAr
    }
  },
  {
    path: 'departments/construction-and-buildings-department',
    component: ConstructionAndBuildingsComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName.nameEn : academyName.nameAr
    }
  },
  {
    path: 'departments/electronics-department',
    component: ElectronicsComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName.nameEn : academyName.nameAr
    }
  },
  {
    path: 'departments/trading-and-analysis-department',
    component: TradingAndAnalysisComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName.nameEn : academyName.nameAr
    }
  },
  {
    path: 'departments/care-of-elderly-department',
    component: CareOfElderlyComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName.nameEn : academyName.nameAr
    }
  },
  {
    path: 'academy-gallery',
    component: AcademyGalleryComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName.nameEn : academyName.nameAr
    }
  },
  {
    path: 'studying-system',
    component: StudyingSystemComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName.nameEn : academyName.nameAr
    }
  },
  {
    path: 'graduates',
    component: GraduatesComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName.nameEn : academyName.nameAr
    }
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    pathMatch: 'full',
    data: {
      title: localStorage.getItem("currentLang") == 'en' ? academyName.nameEn : academyName.nameAr
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
