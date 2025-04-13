import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  title: string = 'خدامتنا الفريدة';
  subTitle: string = 'نحن ملتزمون بخدمتك وتقديم أفضل الحلول التقنية في جميع الأوقات، لضمان استمرارية عملك بأعلى مستويات الكفاءة والجودة'
  boxs: { imgUrl: string, title: string, subtitle: string }[] = [
    { title: "تخطيط موارد المؤسسات بالكامل", subtitle: " حلول  شاملة تربط كافة أقسام شركتك، مما يعزز تدفق العمليات بسلاسة وتحقيق أقصى كفاءة", imgUrl: 'assets/images/services/ser1.svg' },
    { title: "تقارير المبيعات المتقدمة", subtitle: 'يوفر نظام POS تقارير مبيعات شامبة تساعدك علي متابعة ادء عمليات البيع بشكل فوري', imgUrl: 'assets/images/services/ser2.svg' },
    { title: "انظمة المحاسبة الذكية", subtitle: 'ادارة دقيقة وموثوقة لجميع عملياتك المالية مع اعداد تقارير مفصلة تلبي احتياجاتك التشغيلية والاستراتيجية', imgUrl: 'assets/images/services/ser3.svg' },
  ]
}
