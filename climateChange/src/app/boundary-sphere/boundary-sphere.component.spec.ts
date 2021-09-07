import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundarySphereComponent } from './boundary-sphere.component';

describe('BoundarySphereComponent', () => {
  let component: BoundarySphereComponent;
  let fixture: ComponentFixture<BoundarySphereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoundarySphereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundarySphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
