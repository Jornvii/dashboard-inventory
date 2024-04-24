import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrl: './issue.component.scss',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatSelectModule,MatButtonModule],
})
export class IssueComponent implements AfterViewInit {
  displayedColumns: string[] = ['part', 'gauge', 'gmodel', 'qty','process','mc'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;



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

}


const ELEMENT_DATA: PeriodicElement[] = [
  { part: "A12G-1", gauge: 'A-1AAS1', gmodel: '1.0079', qty: 2,  process: 'Some Gauge', mc: 'Model XYZ'},
  { part: "", gauge: 'A-1AAS1', gmodel: '1.0079', qty: 2,  process: 'Some Gauge', mc: 'Model XYZ'},
];



