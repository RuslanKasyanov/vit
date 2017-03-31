 import { Injectable } from '@angular/core';


@Injectable()
export class TasksService {
  public taskStore : Array<Task> = [];


  constructor() {
    const task =[
      {
        name: "Ivan",
        deadline: "Jun 23 2015",
        pomodoroRequired: 1
      },
      {
        name: "Pavel",
        deadline: "Jun 23 2015",
        pomodoroRequired: 2
      }
    ];
    this.taskStore = task.map(task=>{
      return {
        name: task.name,
        deadline: new Date(task.deadline),
        queued: false,
        pomodoroRequired: task.pomodoroRequired
      }
    });
  }

}
