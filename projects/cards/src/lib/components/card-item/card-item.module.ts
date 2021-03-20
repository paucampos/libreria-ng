import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './card-item.component';


@NgModule({
  declarations: [CardItemComponent],
  imports: [
    CommonModule
  ],
  exports: [CardItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardItemModule { }
