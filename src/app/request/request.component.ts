import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface Division {
  [x: string]: any;
  division: string;
  viewDivision: string;
}
interface Production {
  [x: string]: any;
  product: string;
  viewValue: string;
}


interface Process {
  [x: string]: any;
  process: string;
  viewProcess: string;
}

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrl: './request.component.scss',
})


export class RequestComponent {
  divisions: Division[] = [
    { division: '---', viewDivision: '---' },
    { division: 'GM', viewDivision: 'GM' },
    { division: 'M/A', viewDivision: 'M/A' },
    { division: 'tPMA', viewDivision: 'PMA' },
    { division: 'Medical', viewDivision: 'Medical' },
  ];

  selectedDivision: string = '---';

  Productions: Production[] = [
    { product: '---', viewValue: '---' },
    { product: 'Product 1', viewValue: 'Product 1' },
    { product: 'Product 2', viewValue: 'Product 2' },
    { product: 'Product 3', viewValue: 'Product 3' },
    { product: 'Product 4', viewValue: 'Product 4' },
    { product: 'Product 5', viewValue: 'Product 5' },
    { product: 'Other', viewValue: 'Other' },
  ];

  selectedProduction: string = '---';



  Processs: Process[] = [
    { process: '---', viewProcess: '---' },
    { process: 'Sorting', viewProcess: 'Sorting' },
    { process: 'F/A', viewProcess: 'F/A' },
    { process: 'Rework', viewProcess: 'Rework' },
    { process: 'Mass Product', viewProcess: 'Mass Product' },
    { process: 'Pre Product', viewProcess: 'Pre Product' },
    { process: 'Other', viewProcess: 'Other' },
  ];

  selectedProcess: string = '---';

}
