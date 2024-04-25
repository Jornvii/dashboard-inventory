import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog for opening a dialog
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// import { PeriodicElement } from './models/periodic-element';
// Adjust the path according to your file structure
import { MatSelectModule } from '@angular/material/select';

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

  // Function to open the detailed view
  openDetailView(element: PeriodicElement): void {
    // Here you can implement the logic to open the detailed view.
    // For example, you can navigate to another page or open a dialog with additional information.
    // Below is an example of opening a dialog:
    const dialogRef = this.dialog.open(DetailViewDialogComponent, {
      width: '500px',
      data: element // Pass the element data to the dialog if needed
    });

    // You can optionally subscribe to the dialog's afterClosed event to handle any actions after the dialog is closed
    dialogRef.afterClosed().subscribe(result => {
      // Handle any actions after the dialog is closed
    });
  }
}


export class DetailViewDialogComponent {
  constructor() { } // No need to inject anything for this example, adjust as per your actual requirements
}
// File: periodic-element.ts

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
