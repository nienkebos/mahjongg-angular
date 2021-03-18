import { Component, OnInit } from '@angular/core';
import { INPUT_MODES } from '../../models';

@Component({
  selector: 'app-input-panel',
  templateUrl: './input-panel.component.html',
  styleUrls: ['./input-panel.component.scss']
})
export class InputPanelComponent implements OnInit {
  step = 0;
  inputModes = INPUT_MODES;

  constructor() { }

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
