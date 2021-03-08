import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PickedTilesContainerComponent } from './picked-tiles-container.component';

describe('PickedTilesContainerComponent', () => {
  let component: PickedTilesContainerComponent;
  let fixture: ComponentFixture<PickedTilesContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PickedTilesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickedTilesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
