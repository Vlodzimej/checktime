import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

export interface TaskItemCreationData {
  name: string;
  duration: string;
}

@Component({
  selector: 'app-task-item-creation',
  templateUrl: './task-item-creation.component.html',
  styleUrl: './task-item-creation.component.scss',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class TaskItemCreationComponent implements OnInit {

  readonly data = inject<TaskItemCreationData>(MAT_DIALOG_DATA);
  readonly formBuilder = inject(FormBuilder);

  taskCreationForm!: FormGroup;

  ngOnInit(): void {
    this.taskCreationForm = this.formBuilder.group({
      name: ['', Validators.required],
      duration: [0, Validators.required],
    });
  }

  confirm() {
    
  }
}
