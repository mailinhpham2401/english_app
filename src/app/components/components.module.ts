import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashCardComponent } from './flash-card/flash-card.component';



@NgModule({
	declarations: [FlashCardComponent],
	exports:[FlashCardComponent],
	entryComponents:
[FlashCardComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
