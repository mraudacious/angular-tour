import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { FirstComponent } from './first/first.component';
//import { SecondComponent } from './second/second.component';
import { KeycomponentComponent } from './navbar/keycomponent/keycomponent.component';
import { FirstChildComponent } from './navbar/first-child/first-child.component';
import { SecondChildComponent } from './navbar/second-child/second-child.component';

const routes: Routes = [
  //{path: 'first-component', component: FirstComponent},
  //{path: 'second-component', component: SecondComponent},
  {
    path: 'key-component',
    component:KeycomponentComponent,
    children: [
      {path: 'first-child', component: FirstChildComponent},
      {path: 'second-child', component: SecondChildComponent},
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
