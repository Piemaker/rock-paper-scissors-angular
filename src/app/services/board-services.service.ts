import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardServicesService {
  userChoice: string = '';
  userChoiceChange: Subject<string> = new Subject<string>();

  setUserChoice(choice: string) {
    this.userChoiceChange.next(choice);
  }

  constructor() {
    this.userChoiceChange.subscribe((value) => {
      this.userChoice = value;
    });
  }
}
