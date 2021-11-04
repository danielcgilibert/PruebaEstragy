import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroComponent } from './filtro/filtro.component';
import { TablaComponent } from './tabla/tabla.component';



@NgModule({
  declarations: [
    FiltroComponent,
    TablaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FiltroComponent,
    TablaComponent
  ]
})
export class ComponentsModule { }
