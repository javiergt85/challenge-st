import { Component, Input, OnInit } from '@angular/core';
import { ElementLeveled } from 'src/app/interfaces/elements.interface';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.scss']
})
export class ListElementsComponent implements OnInit {

  @Input() elements: ElementLeveled[] | undefined;
  @Input() parentLevel: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  elementClicked(element: any) {
    console.log('Elemento: ' + element.name + ' Nivel: ' + element.level);
  }

}
