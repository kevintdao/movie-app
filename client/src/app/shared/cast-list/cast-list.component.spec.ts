import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastListComponent } from './cast-list.component';

describe('CastListComponent', () => {
  let component: CastListComponent;
  let fixture: ComponentFixture<CastListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CastListComponent]
    });
    fixture = TestBed.createComponent(CastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
