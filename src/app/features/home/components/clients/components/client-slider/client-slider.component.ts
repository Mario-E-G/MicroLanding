import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-client-slider',
  standalone: true,
  imports: [],
  templateUrl: './client-slider.component.html',
  styleUrl: './client-slider.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientSliderComponent {
 @ViewChild('swiper', { static: false })
  swiperContainer!: ElementRef<SwiperContainer>;
  @Output() slideChange = new EventEmitter<string>();
  ngAfterViewInit(): void {
    const swiperParams = {
      slidesPerView: 2.25,
      spaceBetween: 16,
      rtl:true,
     // loop: true,
    /*   autoplay: {
        delay: 3000,
      }, */
/*       pagination: {
        el: '.swiper-pagination',  // Specify the pagination container
        clickable: true,  // Enable clickable pagination
        type: 'bullets',
      }, */
      breakpoints: {
        0: {
          slidesPerView: 1.25,
        },
        570:{
          slidesPerView: 3.25,
        }
      },

      on: {
       
      },
    };
    Object.assign(this.swiperContainer.nativeElement, swiperParams);
    this.swiperContainer.nativeElement.initialize();
    this.swiperContainer.nativeElement.swiper.on('slideChange', () => {
       const activeIndex = this.swiperContainer.nativeElement.swiper.realIndex;
       this.slideChange.emit(activeIndex.toString());
    });
  }
}


