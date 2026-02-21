import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section4Categories } from './section-4-categories';

describe('Section4Categories', () => {
  let component: Section4Categories;
  let fixture: ComponentFixture<Section4Categories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section4Categories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section4Categories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
