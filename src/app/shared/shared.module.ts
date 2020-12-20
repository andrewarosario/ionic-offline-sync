import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './form-error/form-error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    FormErrorComponent
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
    FormErrorComponent
  ]
})
export class SharedModule { }
