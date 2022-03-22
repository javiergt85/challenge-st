import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListElementsComponent } from '../list-elements/list-elements.component';

import { ElementLeveledComponent } from './element-leveled.component';

const element = {
  name: 'Elemento_1',
  children : [
    {name: 'Elemento_1.1'}
  ]
}

describe('ElementLeveledComponent', () => {
  let component: ElementLeveledComponent;
  let fixture: ComponentFixture<ElementLeveledComponent>;

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
    fixture = TestBed.createComponent(ElementLeveledComponent);
    component = fixture.componentInstance;
    component['element'] = element
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render element', () => {
    let p =fixture.nativeElement.querySelector('p');
    expect(p.textContent).toContain('Elemento_1');
  });

  it('click element', () => {
    spyOn(component, 'elementClicked');
    let p =fixture.nativeElement.querySelector('p');
    p.click();
    expect(component.elementClicked).toHaveBeenCalled();
  });
});
