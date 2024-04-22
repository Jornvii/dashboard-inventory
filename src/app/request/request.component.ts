import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface Division {
  value: string;
  viewValue: string;
}
interface Production{
[x: string]: any;
  product: string;
  viewValue: string;
}
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrl: './request.component.scss',
})


export class RequestComponent {
  divisions: Division[] = [
    {value: 'GM', viewValue: 'GM'},
    {value: 'M/A', viewValue: 'M/A'},
    {value: 'tPMA', viewValue: 'PMA'},
    {value: 'Medical', viewValue: 'Medical'},
  ];
  Productions: Production[] = [
    {product: '---', viewValue: '---'},
    {product: 'Sorting', viewValue: 'Sorting'},
    {product: 'F/A', viewValue: 'F/A'},
    {product: 'Rework', viewValue: 'Rework'},
    {product: 'Mass Product', viewValue: 'Mass Product'},
    {product: 'Pre Product', viewValue: 'Pre Product'},
    {product: 'Other', viewValue: 'Other'},
  ];

}
