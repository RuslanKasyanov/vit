import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.css']
})
export class PomodoroTimerComponent implements OnInit {

constructor(){}
  onComplemed(): void{
  alert('time is over');
  }
ngOnInit(){}

}
