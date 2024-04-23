import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrl: './list-request.component.scss',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatSelectModule],
})

export class ListRequestComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'part', 'mc', 'process','status'];
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
  position: number;
  part: string;
  mc: number;
  process: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, part: 'A-1AAS1', mc: 1.0079, process: 'H', status: 'waiting' },
  { position: 2, part: 'A-1AAS1', mc: 4.0026, process: 'He',status:'waiting' },
  { position: 3, part: 'A-1AAS1', mc: 6.941, process: 'Li',status:'waiting' },
  { position: 4, part: 'A-1AAS1', mc: 9.0122, process: 'Be' ,status:'waiting'},
  { position: 5, part: 'A-1AAS1', mc: 10.811, process: 'B',status:'waiting' },
  { position: 6, part: 'A-1AAS1', mc: 12.0107, process: 'C',status:'waiting' },
  { position: 7, part: 'A-1AAS1', mc: 14.0067, process: 'N',status:'waiting' },
  { position: 8, part: 'A-1AAS1', mc: 15.9994, process: 'O',status:'waiting' },
  { position: 9, part: 'A-1AAS1', mc: 18.9984, process: 'F' ,status:'waiting'},
  { position: 10, part: 'A-1AAS1', mc: 20.1797, process: 'Ne' ,status:'waiting'},
  { position: 11, part: 'A-1AAS1', mc: 22.9897, process: 'Na',status:'waiting' },
  { position: 12, part: 'A-1AAS1', mc: 24.305, process: 'Mg',status:'waiting' },
  { position: 13, part: 'A-1AAS1', mc: 26.9815, process: 'Al',status:'waiting' },
  { position: 14, part: 'A-1AAS1', mc: 28.0855, process: 'Si',status:'waiting' },
  { position: 15, part: 'A-1AAS1', mc: 30.9738, process: 'P',status:'waiting' },
  { position: 16, part: 'A-1AAS1', mc: 32.065, process: 'S' ,status:'waiting'},
  { position: 17, part: 'A-1AAS1', mc: 35.453, process: 'Cl',status:'waiting' },
  { position: 18, part: 'A-1AAS1', mc: 39.948, process: 'Ar',status:'waiting' },
  { position: 19, part: 'A-1AAS1', mc: 39.0983, process: 'K' ,status:'waiting'},
  { position: 20, part: 'A-1AAS1', mc: 40.078, process: 'Ca' ,status:'waiting'},
  { position: 21, part: 'A-1AAS1', mc: 40.078, process: 'Ca',status:'waiting' },
];
