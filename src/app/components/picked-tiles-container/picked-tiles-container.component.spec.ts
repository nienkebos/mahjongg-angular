import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickedTilesContainerComponent } from './picked-tiles-container.component';

describe('PickedTilesContainerComponent', () => {
  let component: PickedTilesContainerComponent;
  let fixture: ComponentFixture<PickedTilesContainerComponent>;

  beforeEach(async(() => {
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
