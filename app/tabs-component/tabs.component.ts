import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: [ './tabs.component.scss' ]
})
export class TabsComponent implements OnInit, OnChanges  {
  @Input() tabs;
  
  activeIndex;

  ngOnInit() {
    this.activeIndex = this.tabs.length > 0 ? 0 : -1;
  }

  tabSelected(index){
    this.activeIndex = !!this.tabs[index]? index : this.activeIndex; 
  }

  ngOnChanges(changes: SimpleChanges){
    if (!changes.tabs.currentValue[this.activeIndex]){
      this.activeIndex = 0;
    }
  }
}
