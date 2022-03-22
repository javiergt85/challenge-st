import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ElementLeveledComponent } from './components/element-leveled/element-leveled.component';
import { ListElementsComponent } from './components/list-elements/list-elements.component';
import { PrintLeveledElementsComponent } from './components/print-leveled-elements/print-leveled-elements.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ElementLeveledComponent,
        ListElementsComponent,
        PrintLeveledElementsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
