import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [TabViewModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  tabs: any[] = [
    {
      title: 'المالية',
      icon: 'pi pi-wallet',
      contentTitle: 'نظام المالية',
      features: ['تقارير مالية دقيقة', 'إدارة الحسابات', 'تحليل المصاريف', 'إعداد الميزانيات'],
      imagePath: 'assets/images/tabs.svg',
      correct: 'assets/images/Check Circle.svg'
    },
    {
      title: 'HR',
      icon: 'pi pi-user',
      contentTitle: 'نظام الموارد البشرية',
      features: ['إدارة الموظفين', 'إدارة الرواتب', 'تتبع الحضور والانصراف', 'تقييم الأداء'],
      imagePath: 'assets/images/tabs.svg',
      correct: 'assets/images/Check Circle.svg'
    },
    {
      title: 'المخازن',
      icon: 'pi pi-home',
      contentTitle: 'نظام المخازن',
      features: ['إدارة المخزون', 'تتبع المنتجات', 'تقارير المخازن', 'تنبيهات الكميات المنخفضة'],
      imagePath: 'assets/images/tabs.svg',
      correct: 'assets/images/Check Circle.svg'
    },
    {
      title: 'المشتريات',
      icon: 'pi pi-shopping-cart',
      contentTitle: 'نظام المشتريات',
      features: ['إدارة الموردين', 'طلبات الشراء', 'تتبع الفواتير', 'تحليل النفقات'],
      imagePath: 'assets/images/tabs.svg',
      correct: 'assets/images/Check Circle.svg'
    },
    {
      title: 'المبيعات',
      icon: 'pi pi-tags',
      contentTitle: 'نظام المبيعات',
      features: ['تقارير وتحليلات المبيعات', 'إدارة طلبات البيع', 'إدارة العملاء', 'إعداد الفواتير'],
      imagePath: 'assets/images/tabs.svg',
      correct: 'assets/images/Check Circle.svg'
    },
  ];
}
