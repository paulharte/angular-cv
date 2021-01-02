import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifePeriodComponent } from './life-period.component';

describe('LifePeriodComponent', () => {
  let component: LifePeriodComponent;
  let fixture: ComponentFixture<LifePeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifePeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
