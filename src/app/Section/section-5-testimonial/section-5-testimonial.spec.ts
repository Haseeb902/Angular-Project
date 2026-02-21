import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section5Testimonial } from './section-5-testimonial';

describe('Section5Testimonial', () => {
  let component: Section5Testimonial;
  let fixture: ComponentFixture<Section5Testimonial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section5Testimonial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section5Testimonial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
