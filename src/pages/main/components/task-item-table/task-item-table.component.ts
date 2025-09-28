import { Component, input } from '@angular/core';
import { ITaskItem } from '@models/task-item';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-task-item-table',
  templateUrl: './task-item-table.component.html',
  styleUrl: './task-item-table.component.scss',
  imports: [MatTableModule],
})
export class TaskItemTableComponent {
  dataSource = input<ITaskItem[]>([]);
  displayedColumns: string[] = ['title', 'duration'];
}
