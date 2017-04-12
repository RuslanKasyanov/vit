import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../../shared/shared';

import {setInterval} from "timers";

@Component({
  selector: 'app-timer-widget',
  templateUrl: './timer-widget.component.html',
  styleUrls: ['./timer-widget.component.css']
})
export default class TimerWidgetComponent implements OnInit {
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabelKey: string;
  buttonLabelMap: any;

  constructor(private settingsService: SettingsService) {
    this.buttonLabelMap = settingsService.labelsMap.timer;
  }

  ngOnInit(): void {
    this.restTimer();
    setInterval(() => this.tick(), 1000);
  }

  restTimer(): void {
    this.isPaused = true;
    this.minutes = this.settingsService.timerMinutes - 1;
    this.seconds = 59;
    this.buttonLabelKey = 'start';
  }

  private tick(): void {
    if(!this.isPaused){
      this.buttonLabelKey = 'pause';

      if(-- this.seconds < 0){
        this.seconds = 59;
        if(this.minutes < 0){
          this.restTimer();
        }
      }
    }
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
    if(this.minutes < this.settingsService.timerMinutes || this.seconds < 59){
      this.buttonLabelKey = this.isPaused ? 'resume' : 'pause';
    }
  }

}
