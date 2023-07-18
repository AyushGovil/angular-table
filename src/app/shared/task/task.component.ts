import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Activity } from 'src/app/interfaces/activity.interface';
import { Item } from 'src/app/interfaces/item.interface';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() item!: Item;
  @Output() tableItemAdded: EventEmitter<Activity> =
    new EventEmitter<Activity>();
  isHovered: boolean = false;
  tableItem!: Activity;

  addTableItem(activityType: string) {
    const date = new Date();
    this.tableItem = {
      activityType: activityType,
      dateAndTime: String(date),
      remarkAsAdmin: true,
      requestStatus: 'Approved',
      requestedBy: 'Ayush',
    };
    console.log(this.tableItem);
    this.tableItemAdded.emit(this.tableItem);
  }
}
