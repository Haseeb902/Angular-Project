import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2Card } from './section2-card';

describe('Section2Card', () => {
  let component: Section2Card;
  let fixture: ComponentFixture<Section2Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section2Card]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section2Card);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
