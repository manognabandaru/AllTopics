import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ChildComponent } from './child.component';
import {ChildComponent2} from './child2.component';
import {FormsModule} from '@angular/forms';
import {CustomStructuralDirective} from './CustomStructuralDirective';
import {CustomAttributeDirective} from './CustomAttributeDirective';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildComponent2,
    CustomStructuralDirective,
    CustomAttributeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
