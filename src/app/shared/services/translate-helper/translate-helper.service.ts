import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslateHelperService {
  readonly TRANSLATE_LANG: string = 'Translate_Lang';
  readonly LANG_ATTRIBUTE: string = 'lang';
  readonly DIR_ATTRIBUTE: string = 'dir';

  // services
  //private cdr = inject(ChangeDetectorRef);
  private _translate = inject(TranslateService);

  private _Lang$: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(localStorage.getItem('Translate_Lang'));

  constructor() { }

  initLang() {
    let currentLang = this.getLang();
    this._translate.setDefaultLang(currentLang);
    this._translate.use(currentLang);
    this._translate.onLangChange.subscribe((language) => {
      let lang = language.lang;
      localStorage.setItem(this.TRANSLATE_LANG, lang);
      document.documentElement.setAttribute('lang', lang == 'ar' ? 'ar' : lang);
      document.documentElement.setAttribute(
        'dir',
        lang == 'en' ? 'ltr' : 'rtl'
      );
    });
  }

  setLang(lang: string) {
    this._translate.use(lang);
    this._Lang$.next(lang);
  }

  getLang(): string {
    let currentLang = localStorage.getItem(this.TRANSLATE_LANG);
    if (!currentLang) return this._translate.getDefaultLang();

    return currentLang;
  }

  getCurrentLanguage(): Observable<string | null> {
    return this._Lang$.asObservable();
  }
}
