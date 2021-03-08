import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MeldService {

  constructor() { }

  saveMeld(meld) {
    console.log(meld)
  }
}
