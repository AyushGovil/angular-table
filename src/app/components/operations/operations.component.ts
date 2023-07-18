import { Component } from '@angular/core';
import { Activity } from 'src/app/interfaces/activity.interface';
import { Item } from 'src/app/interfaces/item.interface';
@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css'],
})
export class OperationsComponent {
  title: string = 'table-display';
  selectedEntry: string = 'All Workshops';
  selectedDate: string = 'Today';
  tableItem!: Activity;
  tasks: Item[] = [
    {
      color: '#3F8B9A',
      header: 'Onboard',
      item: 'Onboard New Product',
      subitems: ['Onboard single product'],
      activityType: 'Product Onboarding',
    },
    {
      color: '#3F8B9A',
      header: 'Onboard',
      item: 'Onboard Brand or Category',
      subitems: ['Onboard new brand', 'Onboard new category'],
      activityType: 'Brand Onboarding',
    },
    {
      color: '#639D62',
      header: 'Purchase',
      item: 'Record Product Purchase',
      subitems: ['Record one purchase'],
      activityType: 'Purchase',
    },
    {
      color: '#467B77',
      header: 'Handover',
      item: 'Product Handover',
      subitems: ['Handover to workshop', 'Handover to technician'],
      activityType: 'Handover product',
    },
    {
      color: '#765ABF',
      header: 'Takeover',
      item: 'Product Takeover',
      subitems: ['Takeover from workshop', 'Takeover from technician'],
      activityType: 'Takeover product',
    },
  ];
  onTableItemAdded(tableItem: any) {
    // Handle the emitted tableItem data here
    this.tableItem = tableItem;
  }
}
