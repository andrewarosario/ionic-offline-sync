import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    FormErrorComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormErrorComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
