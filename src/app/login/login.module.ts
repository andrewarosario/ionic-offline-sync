import { NgModule } from '@angular/core';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { LoginFormComponent } from './login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    LoginPageRoutingModule
  ],
  declarations: [
    LoginPage,
    LoginFormComponent
  ]
})
export class LoginPageModule {}
