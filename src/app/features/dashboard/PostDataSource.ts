import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { FakeDataService, Post } from '@core/index';
export class PostDataSource extends DataSource<any> {
  constructor(private dataService: FakeDataService) {
    super();
  }
  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }
  disconnect() {
  }
}
