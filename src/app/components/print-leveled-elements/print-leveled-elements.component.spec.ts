import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ElementLeveledComponent } from '../element-leveled/element-leveled.component';
import { ListElementsComponent } from '../list-elements/list-elements.component';

import { PrintLeveledElementsComponent } from './print-leveled-elements.component';

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

describe('PrintLeveledElementsComponent', () => {
  let component: PrintLeveledElementsComponent;
  let fixture: ComponentFixture<PrintLeveledElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ElementLeveledComponent,
        ListElementsComponent,
        PrintLeveledElementsComponent
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintLeveledElementsComponent);
    component = fixture.componentInstance;
    component.elements = elements
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have elements', () => {
    const compiled = fixture.nativeElement as HTMLElement
    fixture.detectChanges();
    expect(compiled.innerHTML).toContain('Elemento_1');
  });
});
