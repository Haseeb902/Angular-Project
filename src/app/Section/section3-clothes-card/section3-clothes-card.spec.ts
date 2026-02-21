import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3ClothesCard } from './section3-clothes-card';

describe('Section3ClothesCard', () => {
  let component: Section3ClothesCard;
  let fixture: ComponentFixture<Section3ClothesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section3ClothesCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section3ClothesCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
