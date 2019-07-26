import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '@feature/dashboard/dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@material/material.module';
import { DashboardRoutingModule } from '@feature/dashboard/dashboard.routing.module';



@NgModule({

  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class DashboardModule { }
