import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';

import { TimeTrackingService } from '../time-tracking.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrl: './return.component.scss',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatSelectModule,MatButtonModule,MatIconModule,MatButtonModule],
})
export class ReturnComponent implements AfterViewInit {








  displayedColumns: string[] = ['part', 'gauge', 'gmodel', 'qty','process','mc','status'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
onClick: any;

  constructor() { }
  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
}
export interface PeriodicElement {
  part: string;
  gauge?: string;
   gmodel?: string;
   qty: number;
process: string;
  mc: string;
  status: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { part: "A12G-1", gauge: 'A-1AAS1', gmodel: '1.0079', qty: 2,  process: 'Some Gauge', mc: 'Model XYZ', status: 'Option 1'},
  { part: "", gauge: 'A-1AAS1', gmodel: '1.0079', qty: 2,  process: 'Some Gauge', mc: 'Model XYZ', status: 'Option 1'},
  { part: "", gauge: 'A-1AAS1', gmodel: '1.0079', qty: 2,  process: 'Some Gauge', mc: 'Model XYZ', status: 'Option 1'},
];

