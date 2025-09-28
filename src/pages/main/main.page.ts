import { Component, inject, signal, WritableSignal } from '@angular/core';
import { TaskItemTableComponent } from './components/task-item-table/task-item-table.component';
import { ITaskItem } from '@models/task-item';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TaskItemCreationComponent } from './components/task-item-creation/task-item-creation.component';

const ITEMS = [
  { title: 'Test 1', duration: 1 },
  { title: 'Test 2', duration: 2 },
];

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrl: './main.page.scss',
  imports: [TaskItemTableComponent]
})
export class MainPage {

  dialog = inject(MatDialog);

  items: WritableSignal<ITaskItem[]> = signal<ITaskItem[]>(ITEMS);

  handleAddButtonClick() {
    this.dialog.open(TaskItemCreationComponent)

  }
}
