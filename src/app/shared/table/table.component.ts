import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as tableData from '../../../assets/table.json';
import * as moment from 'moment';
interface Activity {
  dateAndTime: string;
  activityType: string;
  remarkAsAdmin: boolean;
  requestStatus: string;
  requestedBy: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  displayedColumns: string[] = [
    'dateAndTime',
    'activityType',
    'remarkAsAdmin',
    'requestStatus',
    'requestedBy',
    'Action',
  ];
  @Input() tableItem!: Activity;
  table: Activity[] = Object.values(tableData);
  paginatedTable: Activity[] = Object.values(tableData).slice(0, 10);
  pageLength: number = 0;
  itemsPerPage: number = 10;
  pageIndex: number = 0;
  ngOnChanges() {
    if (!this.tableItem.activityType) {
      return;
    }
    const parsedDate = moment(
      this.tableItem.dateAndTime,
      'ddd MMM DD YYYY HH:mm:ss '
    );
    this.tableItem.dateAndTime = parsedDate.format('MM-DD-YY, h:mmA');
    this.table.push(this.tableItem);
    this.pageLength = this.table.length;
    this.paginateItems(this.pageIndex, this.itemsPerPage);
  }
  ngOnInit(): void {
    this.table.pop(); // Popping out last two elements as they are not required and are tableData object properties
    this.table.pop();
    this.pageLength = this.table.length;
  }

  onPageChange(event: any) {
    // Update the page size and re-paginate the items
    this.itemsPerPage = event.pageSize;
    this.paginateItems(event.pageIndex, event.pageSize);
  }

  paginateItems(pageIndex: number, pageSize: number) {
    // Perform pagination logic on your array of objects
    this.pageIndex = pageIndex;
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;
    this.paginatedTable = this.table.slice(startIndex, endIndex);
  }
  convertTimeFormat(dateAndTime: string): string {
    return moment(dateAndTime, 'MM/DD/YY HH:mm:ss').format('MM-DD-YY , h:mmA');
  }
  getStatusStyles(requestStatus: string) {
    let color: string = 'black';

    switch (requestStatus) {
      case 'Pending':
        color = '#f0c850';
        break;
      case 'Rejected':
        color = 'red';
        break;
      case 'Approved':
        color = '#519973';
        break;
    }

    return { backgroundColor: color };
  }
}
