import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ElementLeveled } from 'src/app/interfaces/elements.interface';

@Component({
  selector: 'app-element-leveled',
  templateUrl: './element-leveled.component.html',
  styleUrls: ['./element-leveled.component.scss']
})
export class ElementLeveledComponent implements OnInit {

  @Input()
  element!: ElementLeveled;

  @Input()
  parentLevel: string | undefined;
  
  @Input() index: number = 1;

  @Output() elementClickedEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  printLevel(): string {
    return this.parentLevel ? this.parentLevel + '.' +this.index : this.index.toString();
  }

  isTextBold() {
    return this.parentLevel && (!this.element.children || this.element.children.length === 0);
  }

  elementClicked(element: ElementLeveled) {
    this.elementClickedEvent.emit({name: element.name, level: this.printLevel()});
  }

  getIndent(): string {
    if(this.parentLevel) {
      let level = this.parentLevel.split('.').length;
      return (level * 20) + 'px';
    }
    return '0px';
  }
}
