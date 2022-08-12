import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivErrorComponent } from './div-error.component';

describe('DivErrorComponent', () => {
  let component: DivErrorComponent;
  let fixture: ComponentFixture<DivErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
