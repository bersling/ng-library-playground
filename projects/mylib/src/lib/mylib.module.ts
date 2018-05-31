import { NgModule } from '@angular/core';
import { MylibComponent } from './mylib.component';
import { HelloWorld } from 'hwrld';

@NgModule({
  imports: [
  ],
  declarations: [MylibComponent],
  exports: [MylibComponent]
})
export class MylibModule {
  constructor() {
    HelloWorld.sayHello();
  }
}
