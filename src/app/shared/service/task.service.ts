import { Injectable } from '@angular/core';
import {Task} from '../shared';

@Injectable()
export default class TaskService {
public taskStore: Task[] = [];

  constructor() {
    const tasks = [
      {
        name: 'Code an HTML Table',
        deadline: 'Jun 23 2015',
        pomodorosRequired: 1
      },
      {
        name: 'Sketch a ireframe for the new homepage',
        deadline: 'Jun 25 2016',
        pomodorosRequired: 3
      },
      {
        name: 'Rainforce SEO with custom sitemap.xml',
        deadline: 'Jun 26 2016',
        pomodorosRequired: 3
      }
    ];
    this.taskStore = tasks.map(task => {
      return {
        name: task.name,
        deadline: new Date(task.deadline),
        pomodorosRequired: task.pomodorosRequired
      };
    });
  }
}
