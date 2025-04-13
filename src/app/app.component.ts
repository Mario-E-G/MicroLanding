import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHelperService } from './shared/services/translate-helper/translate-helper.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'micro-tech-landing';
  private translate = inject(TranslateService);
  private translateHelperService = inject(TranslateHelperService);


  constructor() {
    this.translate.addLangs(['en', 'ar']);
    this.translateHelperService.initLang();
    localStorage.setItem(
      'Translate_Lang',
      this.translateHelperService.getLang() ?? 'ar'
    );
    this.translate.setDefaultLang(
      this.translateHelperService.getLang() ?? 'ar'
    );
  }
}
