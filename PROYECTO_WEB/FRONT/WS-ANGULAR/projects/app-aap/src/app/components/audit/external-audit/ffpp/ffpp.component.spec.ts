import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FFPPComponent } from './ffpp.component';

describe('FFPPComponent', () => {
  let component: FFPPComponent;
  let fixture: ComponentFixture<FFPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FFPPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FFPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
