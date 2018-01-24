import { expandCollapse } from './zippy.component.animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [ expandCollapse ]
})
export class ZippyComponent  {
  title: string = 'Global Population';
  isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
