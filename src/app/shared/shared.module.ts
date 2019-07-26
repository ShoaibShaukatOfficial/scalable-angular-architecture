import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './components/add-post/add-post.component';
import { MaterialModule } from '@material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddPostComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    FormsModule,
    AddPostComponent
  ],
  entryComponents: [AddPostComponent]

})
export class SharedModule { }
