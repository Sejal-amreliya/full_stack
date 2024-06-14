import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { ComponentFComponent } from './component-f/component-f.component';

const routes: Routes = [
  {
    path:'',
    component:ComponentCComponent
  },
  {
    path: 'add-user',
    component: ComponentAComponent,
  },
  {
    path:'user-data',
    component:ComponentBComponent
  },
  {
    path:'pdf',
    component:ComponentFComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
