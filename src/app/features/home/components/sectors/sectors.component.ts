import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Card } from '../../../../core/models/card.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule],
  templateUrl: './sectors.component.html',
  styleUrl: './sectors.component.scss'
})
export class SectorsComponent {

  header = 'حل متكامل وممن يدعم العديد من القطاعات';
  description = 'نقدم حلاً تقنية مبتكرة لدعم الشركات في مختلف الصناعات، لمساعدتها على تحقيق النجاح والتحول الرقمي بكفاءة.';

  cards: Card[] = [
    {
      title: 'قطاع العقارات والمقاولات',
      buttonText: 'المزيد',
      imagePath: 'assets/images/sector1.svg'
    },
    {
      title: 'قطاع العقارات والمقاولات',
      buttonText: 'المزيد',
      imagePath: 'assets/images/sector1.svg'
    },
    {
      title: 'قطاع التكنولوجيا',
      buttonText: 'المزيد',
      imagePath: 'assets/images/sector2.svg'
    },
    {
      title: 'قطاع التصنيع',
      buttonText: 'المزيد',
      imagePath: 'assets/images/sector3.svg'
    },
    {
      title: 'قطاع التعليم',
      buttonText: 'المزيد',
      imagePath: 'assets/images/sector4.svg'
    }
  ];

}
