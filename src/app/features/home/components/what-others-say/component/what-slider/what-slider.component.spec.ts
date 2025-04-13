import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatSliderComponent } from './what-slider.component';

describe('WhatSliderComponent', () => {
  let component: WhatSliderComponent;
  let fixture: ComponentFixture<WhatSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
