import { Component, OnInit } from '@angular/core';
import { INPUT_MODES } from '../../models';

@Component({
  selector: 'app-picked-tiles-container',
  templateUrl: './picked-tiles-container.component.html',
  styleUrls: ['./picked-tiles-container.component.scss']
})
export class PickedTilesContainerComponent implements OnInit {
  inputModes = INPUT_MODES;
  constructor() { }

  ngOnInit() {
  }

}
