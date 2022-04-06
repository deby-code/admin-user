import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSpinnerComponent } from './action-spinner.component';

describe('ActionSpinnerComponent', () => {
  let component: ActionSpinnerComponent;
  let fixture: ComponentFixture<ActionSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
