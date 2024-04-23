import { Component } from '@angular/core';
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
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrl: './return.component.scss'
})
export class ReturnComponent {
  activeTab: string = 'tab1';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }


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
