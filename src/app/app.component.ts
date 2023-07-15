import { Component } from '@angular/core';

interface Item {
  color: string;
  header: string;
  item: string;
  subitems: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'table-display';
  selectedEntry: string = 'All Workshops';
  selectedDate: string = 'Today';

  tasks: Item[] = [
    {
      color: '#3F8B9A',
      header: 'Onboard',
      item: 'Onboard New Product',
      subitems: ['Onboard single product'],
    },
    {
      color: '#3F8B9A',
      header: 'Onboard',
      item: 'Onboard Brand or Category',
      subitems: ['Onboard new brand', 'Onboard new category'],
    },
    {
      color: '#639D62',
      header: 'Purchase',
      item: 'Record Product Purchase',
      subitems: ['Record one purchase'],
    },
    {
      color: '#467B77',
      header: 'Handover',
      item: 'Product Handover',
      subitems: ['Handover to workshop', 'Handover to technician'],
    },
    {
      color: '#765ABF',
      header: 'Takeover',
      item: 'Product Takeover',
      subitems: ['Takeover from workshop', 'Takeover from technician'],
    },
  ];
}
