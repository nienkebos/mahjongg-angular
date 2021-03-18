import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TilestackState } from '../../store/tilestack/tilestack.reducer';
import { INPUT_MODES, Tile } from '../../models';

@Component({
  selector: 'app-input-panel',
  templateUrl: './input-panel.component.html',
  styleUrls: ['./input-panel.component.scss']
})
export class InputPanelComponent implements OnInit {
  step = 0;
  tilestack$: Observable<Tile[]>;
  inputModes = INPUT_MODES;

  constructor(private store: Store<TilestackState>) {
    this.tilestack$ = store.pipe(
      select('tilestack')
    )
  }

  ngOnInit() {}

  setStep(index:number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
