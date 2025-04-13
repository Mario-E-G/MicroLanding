import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-slider-box',
  standalone: true,
  imports: [],
  templateUrl: './slider-box.component.html',
  styleUrl: './slider-box.component.scss'
})
export class SliderBoxComponent {
  @Input() boxImg!:string;
  @Input() boxTitle!:string;
  @Input() boxSubTitle!:string;
  @Input() boxDescription!:string;
}
