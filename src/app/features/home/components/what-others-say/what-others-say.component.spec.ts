import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatOthersSayComponent } from './what-others-say.component';

describe('WhatOthersSayComponent', () => {
  let component: WhatOthersSayComponent;
  let fixture: ComponentFixture<WhatOthersSayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatOthersSayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatOthersSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
