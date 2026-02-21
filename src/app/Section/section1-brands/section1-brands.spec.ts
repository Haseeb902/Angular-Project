import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1Brands } from './section1-brands';

describe('Section1Brands', () => {
  let component: Section1Brands;
  let fixture: ComponentFixture<Section1Brands>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section1Brands]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section1Brands);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
