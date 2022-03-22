import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElementsComponent } from './list-elements.component';
import { ElementLeveledComponent } from '../element-leveled/element-leveled.component';

const elements = [
  {
    name: 'Elemento_1',
    children : [
      {name: 'Elemento_1.1'}
    ]
  },
  {
    name: 'Elemento_2'
  }
]

describe('ListElementsComponent', () => {
  let component: ListElementsComponent;
  let fixture: ComponentFixture<ListElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ElementLeveledComponent,
        ListElementsComponent 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListElementsComponent);
    component = fixture.componentInstance;
    component.elements = elements
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 elements', () => {
    const compiled = fixture.nativeElement as HTMLElement
    let appElements = compiled.querySelectorAll('app-element-leveled')
    expect(appElements.length).toBe(3);
  });
});
