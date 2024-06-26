import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFComponent } from './component-f/component-f.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentDComponent } from './component-d/component-d.component';
import { ComponentEComponent } from './component-e/component-e.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
    ComponentFComponent,
    ComponentDComponent,
    ComponentEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
