import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './drop-down/drop-down.component';

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule
  ],
  exports: [DropdownComponent]
})
export class SharedModule { }
