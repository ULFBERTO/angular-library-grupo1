import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule, ButtonComponent],
  exports: [ButtonComponent],
  providers: []
})
export class AngularLibraryGrupo1Module { }
