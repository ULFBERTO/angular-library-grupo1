import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';
@NgModule({
  imports: [CommonModule, ButtonComponent, TableComponent, ModalComponent],
  exports: [ButtonComponent, TableComponent, ModalComponent],
  providers: []
})
export class AngularLibraryGrupo1Module { }
