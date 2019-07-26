import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FakeDataService } from 'src/app/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  constructor( public dialogRef: MatDialogRef<AddPostComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
               public dataService: FakeDataService

  ) { 
    debugger;
  }

  blogPost = {
    title: '',
    body: '',
    category: '',
    position: 0,
    date_posted: new Date()
  };
  public event: EventEmitter<any> = new EventEmitter();

  categories = this.dataService.getCategories();

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.blogPost.position = this.dataService.dataLength();
    this.event.emit({data: this.blogPost});
    this.dialogRef.close();
  }
}
