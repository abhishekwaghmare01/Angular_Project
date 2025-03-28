import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompComponent } from './acomp.component';

describe('AcompComponent', () => {
  let component: AcompComponent;
  let fixture: ComponentFixture<AcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
