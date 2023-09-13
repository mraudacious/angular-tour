import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { KeycomponentComponent } from './keycomponent/keycomponent.component';


@NgModule({
  declarations: [

  
      FirstChildComponent,
      SecondChildComponent,
      KeycomponentComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [FirstChildComponent, SecondChildComponent, KeycomponentComponent]
})
export class NavbarModule { }
