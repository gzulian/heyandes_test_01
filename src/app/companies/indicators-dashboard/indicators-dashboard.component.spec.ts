import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorsDashboardComponent } from './indicators-dashboard.component';

describe('IndicatorsDashboardComponent', () => {
  let component: IndicatorsDashboardComponent;
  let fixture: ComponentFixture<IndicatorsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicatorsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
