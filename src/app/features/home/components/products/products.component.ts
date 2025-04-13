import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = [
    {
      title: 'ERP',
      description: 'نقدم حلولًا تقنية متكاملة لدعم الشركات في مختلف الصناعات...',
      image: 'assets/images/erp.svg',
    },
    {
      title: 'نظام نقاط البيع المتنقلة',
      description: 'نظام نقاط البيع المتنقلة للاستخدام الخاص أو التجاري مع مرونة عالية...',
      image: 'assets/images/pos.svg',
    },
    {
      title: 'نظام نقاط البيع المتنقلة',
      description: 'نظام نقاط البيع المتنقلة للاستخدام الخاص أو التجاري مع مرونة عالية...',
      image: 'assets/images/pos1.svg',
    },
    {
      title: 'نظام نقاط البيع المتنقلة',
      description: 'نظام نقاط البيع المتنقلة للاستخدام الخاص أو التجاري مع مرونة عالية...',
      image: 'assets/images/mobiles.svg',
    },
    {
      title: 'نظام نقاط البيع المتنقلة',
      description: 'نظام نقاط البيع المتنقلة للاستخدام الخاص أو التجاري مع مرونة عالية...',
      image: 'assets/images/mobiles.svg',
    },
  ];
}
