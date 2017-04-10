import { Injectable } from '@angular/core';

@Injectable()
export default class SettingsService {
  timerMinutes: number;
  labelsMap: any;
  pluralsMap: any;
  constructor() {
    this.timerMinutes = 25;
    this.labelsMap = {
      'timer': {
        'start': 'Start timer',
        'pause': 'Pause start',
        'resume': 'Resume countdown',
        'Other': 'unknown'
      }
    };
    this.pluralsMap = {
      'tasks': {
        '=0': 'No pomodoros',
        '=1': 'One pomodoro',
        'other': '# pomodoros'
      }
    };
  }
}
