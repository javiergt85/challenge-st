import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrintLeveledElementsComponent } from './components/print-leveled-elements/print-leveled-elements.component';
import { ListElementsComponent } from './components/list-elements/list-elements.component';
import { ElementLeveledComponent } from './components/element-leveled/element-leveled.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintLeveledElementsComponent,
    ListElementsComponent,
    ElementLeveledComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
