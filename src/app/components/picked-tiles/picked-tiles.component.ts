import { Component, OnInit, Input } from '@angular/core';
import { MeldStoreService } from '../../services/meld-store.service';
import { INPUT_MODES, Meld } from '../../data/types';

@Component({
  selector: 'app-picked-tiles',
  templateUrl: './picked-tiles.component.html',
  styleUrls: ['./picked-tiles.component.scss']
})
export class PickedTilesComponent implements OnInit {
  @Input() mode: INPUT_MODES;
  pickedMelds: Meld[];
  meldsToShow: Meld[];
  modes: INPUT_MODES;
  constructor(private meldStoreService: MeldStoreService) { }

  ngOnInit() {
    this.meldStoreService.melds$.subscribe(melds => {
      this.pickedMelds = melds;
      this.showMelds();
    });

  }
  showMelds() {
    this.meldsToShow = this.pickedMelds.filter(meld => {
      console.log(meld)
      return meld.mode === this.mode;
    })
  }

}
