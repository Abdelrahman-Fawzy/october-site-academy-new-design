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
        img: "assets/images/partners/labor_ministry.jpg", 
        Partner: "وزارة الدفاع- إدارة التعليم و التدريب المهنى.",
        info: 'إنطلاقا من مبدأ التكامل و العمل المشترك وتبادل الخبرات بين القوات المسلحة والمؤسسات العاملة في مجال التدريب المهني تم اللإتفاق على بروتوكول تعاون الصادر بتاريخ 14-2-2024 . ',
        divElement: 'defense'
      },
      { 
        img: "assets/images/soro/images.jpeg", 
        Partner: "وزارة التربية والتعليم – التعليم الخاص.",
        divElement: 'education'
      },
      { 
        img: "assets/images/soro/logogfi.png", 
        Partner: "وزارة الإستثمار – الشركات المساهمة",
        info: '',
        divElement: 'investigation'
      },
      { 
        img: "assets/images/soro/هيئة_تنمية_صناعة_تكنولوجيا_المعلومات_(مصر).png", 
        Partner: "وزارة الإتصالات وتكنولوجيا المعلومات – هيئة تنمية صناعة التكنولوجيا.",
        info: 'ترخيص رقم 009640 تاريخ 12/09/2021',
        divElement: 'iteda'
      },
      { 
        img: "assets/images/soro/imassges.jpeg", 
        Partner: "وزارة الثقافة – قطاع شئون الإنتاج الثقافى",
        info: '',
        divElement: 'culture'
      },
      { 
        img: "assets/images/soro/imassssges.jpeg", 
        Partner: "وزارة التجارة والصناعة – المعهد القومى للجودة",
        info: 'حاصلين على ترخيص بمزاولة نشاط التدريب والتأهيل بشهادة رقم NQIT 347/326  الصادرة بتاريخ 8-5-2023 .',
        divElement: 'nqi'
      },
      { 
        img: "assets/images/partners/cairo.png", 
        Partner: "وزارة التضامن الإجتماعى – المجلس الوطنى للتدريب",
        info: 'محافظة القاهرة – جهاز تشغيل شباب الخريجين',
        divElement: 'training'
      },
      { 
        img: "assets/images/soro/IMG_20220401_140148-390x220.jpg", 
        Partner: "وزارة الثقافة – قطاع شئون الإنتاج الثقافى – الإدارة العامة",
        info: ' للتراخيص الفنية ترخيص رقم 52362 تاريخ 22/11/2021',
        divElement: 'generalManagement'
      },
      { 
        img: "assets/images/soro/imsssages.jpeg", 
        Partner: "مجلس الوحدة الإقتصادية – مركز التدريب و البحوث والإستشارات",
        info: 'تم الإتفاق مع الأمانة العامة لمجلس الوحدة الاقتصادية العربية بعقد تنفيذ الصادر بتاريخ 16-4-2024 للعمل المشترك على مواكبة التطور العمي والمعملي العالمي في المجالات المختلفة.',
        divElement: 'trainingCenter'
      },
      { 
        img: "assets/images/soro/images.png", 
        Partner: "جامعة أسيوط – كلية التجارة – مركز الخدمة العامة للإستشارات التجارية والتنمية الإدارية",
        info: '13/10/2020',
        divElement: 'assiut'
      },
      { 
        img: "assets/images/soro/images.png", 
        Partner: "جامعة أسيوط – وحدة نقل التكنولوجيا المتكاملةITTU  ",
        info: '27/08/2018',
        divElement: 'ITTU'
      },
      { 
        img: "assets/images/soro/imagxxxxxes.png", 
        Partner: "جامعة الأزهر – مركز الحاسب الالى ",
        info: '',
        divElement: 'azhar'
      },
      { 
        img: "assets/images/soro/imssssssages.png", 
        Partner: "جامعة القاهرة – كلية الإعلام – مركز التدريب والتوثيق والإنتاج الإعلامى",
        info: 'اتفاقية تعاون بتاريخ 11-6-2012 مع مركز التدريب والتوثيق والإنتاج الإعلامي بكلية الإعلام جامعة القاهرة، حيث تتضمن بنود هذه الاتفاقية منح شهادة معتمدة من مركز كلية الإعلام جامعة القاهرة لخريجي مراكز 6 أكتوبر. ',
        divElement: 'cairo'
      },
      { 
        img: "assets/images/soro/elaosboa15427.jpg", 
        Partner: "جامعة حلوان – كلية الأداب – مركز اللغات للأغراض المتخصصة 23/12/2012",
        info: '',
        divElement: 'helwan'
      },
      { 
        img: "assets/images/soro/elaosboa15427.jpg", 
        Partner: "جامعة بنها – كلية الأداب – مركز الدراسات الإنسانية 30-10-2013",
        info: '',
        divElement: 'benha'
      },
      { 
        img: "assets/images/soro/المقاولون_العرب.png", 
        Partner: "شركة المقاولون العرب",
        info: 'وكالة الأهرام للدعاية و الإعلان – مركز التدريب أماك بروتكول تعاون بتاريخ 16/08/2023 للتدريب العملى (صحافة وإعلام – جرافيك)',
        divElement: 'mokawloon'
      },
      { 
        img: "assets/images/soro/شركة أسيوط لتكرير البترول.jpeg", 
        Partner: "شركة أسيوط لتكرير البترول",
        info: '',
        divElement: 'assiutPetrol'
      },
      { 
        img: "assets/images/soro/شركة مانفودز ماكدونالدز.jpg", 
        Partner: "شركة مانفودز ماكدونالدز ",
        info: 'مارس 2013',
        divElement: 'mac'
      },
      { 
        img: "assets/images/soro/شركة الأمانى للأعمال المساحية.png", 
        Partner: "شركة الأمانى للأعمال المساحية",
        info: '',
        divElement: 'amany'
      },
      { 
        img: "assets/images/soro/قرية مجاويش السياحية – الغردقة.JPEG", 
        Partner: "قرية مجاويش السياحية – الغردقة",
        info: `تدريب على جميع أعمال السياحة والفنادق بتاريخ 17-01-2004
          فندق مارلين إن – الغردقة
          تدريب على جميع أعمال السياحة والفنادق بتاريخ 17-01-
          `,
        divElement: 'magawesh'
      },
      { 
        img: "assets/images/soro/لاروز لإدارة المطاعم والفنادق.jpeg", 
        Partner: "شركة لاروز لإدارة المطاعم والفنادق",
        info: ``,
        divElement: 'laroz'
      },
      { 
        img: "assets/images/soro/فندق شهرزاد2019_1_12_16_58_36_168.jpg", 
        Partner: "فندق شهرزاد ",
        info: `تدريب على جميع أعمال السياحة والفنادق بتاريخ 17-01-2004`,
        divElement: 'sharazad'
      },
      { 
        img: "assets/images/soro/فندق سى جاردن.jpg", 
        Partner: "فندق سى جاردن – الغردقة",
        info: `تدريب على جميع أعمال السياحة والفنادق بتاريخ 17-01-2004`,
        divElement: 'seagarden'
      },
      { 
        img: "assets/images/soro/فندق سى جاردن.jpg", 
        Partner: "قرية جولدن فايف السياحية",
        info: `تدريب على جميع أعمال السياحة والفنادق بتاريخ 18-01-2004`,
        divElement: 'goldenFive'
      },
      { 
        img: "assets/images/soro/فندق أبروتيل أرابيلا – الغردقة.jpg", 
        Partner: "فندق أبروتيل أرابيلا – الغردقة",
        info: `تدريب على جميع أعمال السياحة والفنادق بتاريخ 17-01-2004`,
        divElement: 'arabella'
      },
      { 
        img: "assets/images/soro/SSSSSSSS-e1618917520840.jpg", 
        Partner: "جمعية رساله – مستشفى رسالة ",
        info: ``,
        divElement: 'resala'
      },
      { 
        img: "assets/images/soro/SSSSSSSS-e1618917520840.jpg", 
        Partner: "مستشفى الريان التخصصى",
        info: ``,
        divElement: 'rayan'
      },
      { 
        img: "assets/images/soro/SSSSSSSS-e1618917520840.jpg", 
        Partner: "مستشفى الحرية",
        info: ``,
        divElement: 'freedom'
      },
      { 
        img: "assets/images/soro/SSSSSSSS-e1618917520840.jpg", 
        Partner: "هيئة الأبنية التعليمية",
        info: ``,
        divElement: 'abnia'
      },
      { 
        img: "assets/images/soro/SSSSSSSS-e1618917520840.jpg", 
        Partner: "شركة باور للخدمات البترولية",
        info: ``,
        divElement: 'power'
      },
      { 
        img: "assets/images/soro/شركة ليفت للخدمات البترولية.png", 
        Partner: "شركة ليفت للخدمات البترولية",
        info: ``,
        divElement: 'left'
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
