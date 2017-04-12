import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../shared/shared';

@Component({
  selector: 'app-task-icons',
  templateUrl: './task-icons.component.html',
  styleUrls: ['./task-icons.component.css']
})

export default class TaskIconsComponent implements OnInit {
  @Input() task: Task;
  @Input() size: number;
  icons: Object[] = [];
  constructor() { }

  ngOnInit() {
    this.icons.length = this.task.pomodorosRequired;
    this.icons.fill({name: this.task.name});
  }
}

