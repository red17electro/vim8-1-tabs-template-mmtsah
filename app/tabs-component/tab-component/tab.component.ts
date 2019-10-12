import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: [ './tab.component.scss' ]
})
export class TabComponent {
  @Input() isActive;
  @Input() index;
  @Output() setIndex = new EventEmitter();


  selectTab(){
    this.setIndex.emit(this.index);
  }
}
