import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLabelComponent } from './section-label.component';

describe('SectionLabelComponent', () => {
  let component: SectionLabelComponent;
  let fixture: ComponentFixture<SectionLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionLabelComponent]
    });
    fixture = TestBed.createComponent(SectionLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
