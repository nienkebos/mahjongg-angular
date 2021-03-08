import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-panel',
  templateUrl: './input-panel.component.html',
  styleUrls: ['./input-panel.component.scss']
})
export class InputPanelComponent implements OnInit {
  step = 0;

  constructor() { }

  ngOnInit() {
  }

  setStep(index:number) {
    this.step = index;

  }

  nextStep() {
    this.step++
  }

  prevStep() {
    this.step--
  }

}
