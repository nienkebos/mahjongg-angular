import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InputPanelComponent } from './input-panel.component';

describe('InputPanelComponent', () => {
  let component: InputPanelComponent;
  let fixture: ComponentFixture<InputPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
