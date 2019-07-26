import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from '@feature/welcome/welcome.routing.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
