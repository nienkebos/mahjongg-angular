import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PickedTilesComponent } from './picked-tiles.component';

describe('PickedTilesComponent', () => {
  let component: PickedTilesComponent;
  let fixture: ComponentFixture<PickedTilesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PickedTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickedTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
