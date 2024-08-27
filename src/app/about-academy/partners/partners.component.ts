import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit, AfterViewInit {

  partners = []

  constructor() { 
    this.partners = [
      { 
        img: "assets/images/partners/labor_ministry.jpg", 
        Partner: "وزارة العمل - الإدارة المركزية للتدريب المهني",
        info: 'حاصلين على الترخيص رقم 1 في التدريب المهني الصادربتاريخ 28-2-2024 وفقا لقانون العمل رقم 12 لسنة 2003',
        divElement: 'labor'
      },
      { 
        img: "assets/images/partners/adults.png", 
        Partner: "جهاز تشغيل شباب الخريجين",
        divElement: 'adults'
      },
      { 
        img: "assets/images/partners/assiut.png", 
        Partner: "جامعة اسيوط",
        divElement: 'assiut'
      },
      { 
        img: "assets/images/partners/dubai.png", 
        Partner: "حكومة دبي",
        divElement: 'dubai'
      },
      { 
        img: "assets/images/partners/investigation.png", 
        Partner: "وزارة الاستثمار و التعاون الدولي",
        divElement: 'investigation'
      },
      { 
        img: "assets/images/partners/azhar.png", 
        Partner: "جامعة الازهر",
        divElement: 'azhar'
      },
      { 
        img: "assets/images/partners/benha.png", 
        Partner: "جامعة بنها",
        divElement: 'benha'
      },
      { 
        img: "assets/images/partners/watny.png", 
        Partner: "المجلس الوطني للتدريب و التعليم",
        divElement: 'watny'
      },
      { 
        img: "assets/images/partners/cairo.png", 
        Partner: "جامعة القاهرة",
        divElement: 'cairo'
      },
    ];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    document.getElementById('partnerDefaultOpen').click()
  }

  openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

}
