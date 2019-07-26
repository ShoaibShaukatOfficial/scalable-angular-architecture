import { Component } from '@angular/core';

import { FakeDataService, Auth0Service } from '@core/index';
import { AddPostComponent } from '@shared/index';
import { MatDialog } from '@angular/material';
import {PostDataSource} from '@feature/dashboard/PostDataSource';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private dataService: FakeDataService, public auth: Auth0Service, public dialog: MatDialog) {
  }

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);
  deletePost(id: any) {
    if (this.auth.isAuthenticated()) {
      this.dataService.deletePost(id);
      this.dataSource = new PostDataSource(this.dataService);
    } else {
      alert('Login in Before');
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddPostComponent, {
      width: '600px',
      data: 'Add Post'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addPost(result.data);
      this.dataSource = new PostDataSource(this.dataService);
    });
  }
}


