import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewavailablequizComponent } from './viewavailablequiz.component';

describe('ViewavailablequizComponent', () => {
  let component: ViewavailablequizComponent;
  let fixture: ComponentFixture<ViewavailablequizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewavailablequizComponent]
    });
    fixture = TestBed.createComponent(ViewavailablequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
