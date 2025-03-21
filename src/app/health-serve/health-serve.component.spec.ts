import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthServeComponent } from './health-serve.component';

describe('HealthServeComponent', () => {
  let component: HealthServeComponent;
  let fixture: ComponentFixture<HealthServeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthServeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
