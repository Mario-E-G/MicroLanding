import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  logosec: { logoUrl: string, description: string } = {
    logoUrl: 'assets/images/footer/footer-logo.svg',
    description: "شركة رائدة في مجال البرامج المحاسبية، بدأنا منذ 2001 وحتى الآن، تنتشر فروعنا في الوطن العربي, بالمملكة العربية السعودية، ومصر."
  }
  icons: { label: string, iconUrl: string }[] = [
    { label: 'facebook', iconUrl: 'assets/images/footer/icons/facebook.svg' },
    { label: 'instagram', iconUrl: 'assets/images/footer/icons/instagram.svg' },
    { label: 'linkedin', iconUrl: 'assets/images/footer/icons/linkedin.svg' },
    { label: 'twitter', iconUrl: 'assets/images/footer/icons/twitter.svg' },
    { label: 'youtube', iconUrl: 'assets/images/footer/icons/youtube.svg' },
  ]
  footerInfoList: any = [
    {
      title: 'المنتجات', links: [
        { linkTit: 'التصنيع' },
        { linkTit: 'الخدمات المالية' },
        { linkTit: 'التجارة والتجزئة' },
        { linkTit: 'العقارات والمقاولات' },
      ]
    },
    {
      title: 'القطاعات', links: [
        { linkTit: 'التصنيع' },
        { linkTit: 'الخدمات المالية' },
        { linkTit: 'التجارة والتجزئة' },
        { linkTit: 'العقارات والمقاولات' },
      ]
    },
    {
      title: 'روابط سريعة', links: [
        { linkTit: 'التصنيع' },
        { linkTit: 'الخدمات المالية' },
        { linkTit: 'التجارة والتجزئة' },
        { linkTit: 'العقارات والمقاولات' },
      ]
    },
    {
      title: '', links: [
        { linkTit: 'التصنيع' },
        { linkTit: 'الخدمات المالية' },
        { linkTit: 'التجارة والتجزئة' },
        { linkTit: 'العقارات والمقاولات' },
      ]
    },
  ]
}
