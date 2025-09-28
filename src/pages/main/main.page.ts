import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { TaskItemTableComponent } from './components/task-item-table/task-item-table.component';
import { ITaskItem } from '@models/task-item';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TaskItemCreationComponent } from './components/task-item-creation/task-item-creation.component';
import { MatDividerModule } from '@angular/material/divider';

const ITEMS = [
  { title: 'Test 1', duration: 1 },
  { title: 'Test 2', duration: 2 },
];

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrl: './main.page.scss',
  imports: [TaskItemTableComponent, MatDividerModule]
})
export class MainPage {

  dialog = inject(MatDialog);

  currentItem = signal<ITaskItem | undefined>(undefined);
  items: WritableSignal<ITaskItem[]> = signal<ITaskItem[]>(ITEMS);

  summary = computed(() => this.items().reduce((prevValue, item) => prevValue + Number(item.duration), 0));

  handleAddButtonClick() {
    const dialogRef = this.dialog.open(TaskItemCreationComponent, {
      data: { 
        item: this.currentItem() 
      }
    })

    dialogRef.afterClosed().subscribe(item => {
      this.items.update(items => [...items, item])
    })
  }
}
