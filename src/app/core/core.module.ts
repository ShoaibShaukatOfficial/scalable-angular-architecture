import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeDataService, Auth0Service, TokenInterceptorService } from '@core/services';
import { RuntimeConfigLoaderModule } from '@runtimeconfig/runtime-config-loader.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RuntimeConfigLoaderModule.forRoot({ configUrl: './assets/config/config.json' })
  ],
  providers: [
    FakeDataService,
    Auth0Service,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule { }
