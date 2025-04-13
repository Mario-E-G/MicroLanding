import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SliderBoxComponent } from './component/slider-box/slider-box.component';
import { WhatSliderComponent } from './component/what-slider/what-slider.component';

@Component({
  selector: 'app-what-others-say',
  standalone: true,
  imports: [SliderBoxComponent, WhatSliderComponent],
  templateUrl: './what-others-say.component.html',
  styleUrl: './what-others-say.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WhatOthersSayComponent {
  sliderboxs: { imgUrl: string, title: string, subTitle: string, description: string }[] = [
    { imgUrl: 'assets/images/slider.svg', title: 'امير', subTitle: 'الرئيس التنفيذي لشركة  اكوا', description: '"فريق الدعم كان سريع الاستجابة وقدم لي المساعدة التي كنت بحاجة إليها". ' },
    { imgUrl: 'assets/images/slider.svg', title: 'ابانوب', subTitle: 'الرئيس التنفيذي لشركة  اكوا', description: '"فريق الدعم كان سريع الاستجابة وقدم لي المساعدة التي كنت بحاجة إليها". ' },
    { imgUrl: 'assets/images/slider.svg', title: 'على', subTitle: 'الرئيس التنفيذي لشركة  اكوا', description: '"فريق الدعم كان سريع الاستجابة وقدم لي المساعدة التي كنت بحاجة إليها". ' },
    { imgUrl: 'assets/images/slider.svg', title: 'محمود', subTitle: 'الرئيس التنفيذي لشركة  اكوا', description: '"فريق الدعم كان سريع الاستجابة وقدم لي المساعدة التي كنت بحاجة إليها". ' },
  ]

}
