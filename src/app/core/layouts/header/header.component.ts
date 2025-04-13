import { Component, HostListener, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { NavLink, headerLinks } from '../../models/header-links.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MobileHeaderComponent } from "./components/mobile-header/mobile-header.component";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, ButtonModule, TranslateModule, CommonModule, MobileHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  items: NavLink[] = [];
  innerWidth!: number;
  sidebarVisible: boolean = false

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.loadTranslations();
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  private loadTranslations(): void {
    this.items = headerLinks.map(item => ({
      ...item,
      label: this.translate.instant(item.label),
      items: item.items?.map(subItem => ({
        ...subItem,
        label: this.translate.instant(subItem.label)
      }))
    }));
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth
  }
}