import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
@NgModule({
  imports: [CommonModule, ButtonComponent, TableComponent],
  exports: [ButtonComponent, TableComponent],
  providers: []
})
export class AngularLibraryGrupo1Module { }
