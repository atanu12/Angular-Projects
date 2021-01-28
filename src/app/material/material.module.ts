import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';

const Materialcomponents =[
  MatButtonModule,
  MatIconModule,MatFormFieldModule,
  MatToolbarModule
]




@NgModule({
  
  imports: [Materialcomponents],
  exports:[Materialcomponents]
})
export class MaterialModule { }
