import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog for opening a dialog
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// import { PeriodicElement } from './models/periodic-element';
// Adjust the path according to your file structure
import { MatSelectModule } from '@angular/material/select';
import { DetialComponent } from '../detial/detial.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatSelectModule,MatButtonModule,MatIconModule,MatButtonModule],
})

export class HistoryComponent implements AfterViewInit {
  displayedColumns: string[] = ['part', 'gauge', 'gmodel', 'qty', 'process', 'mc', 'status', 'viewdetial'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private dialog: MatDialog) { }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  openDetailView(element: any): void {
    const dialogRef = this.dialog.open(DetialComponent, {
      width: '80%',
      height: '100%',
      data: element // Pass the data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
    });
  }
}


export class DetailViewDialogComponent {
  constructor() { } // No need to inject anything for this example, adjust as per your actual requirements
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
  { part: "A12G-1", gauge: 'A-1AAS1', gmodel: '1.0079', qty: 2, process: 'Some Gauge', mc: 'Model XYZ', status: 'Option 1' },
];
