import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardItemModule } from '../card-item/card-item.module';
import { CardsComponent } from './cards.component';



@NgModule({
  declarations: [CardsComponent],
  imports: [
    CardItemModule,
    BrowserModule
  ],
  exports: [CardsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CardsModule { }
