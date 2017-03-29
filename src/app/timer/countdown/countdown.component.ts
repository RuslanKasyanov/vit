import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  @Input() seconds: number;
  @Input() isPause: boolean;
  @Output() complete: EventEmitter <any> = new EventEmitter();
  @Output() progress: EventEmitter <number> = new EventEmitter();
  intervalId: any;


  constructor() {
    this.isPause = false;
    this.intervalId = setInterval(() =>this._tick(), 1000);
  }

  private _tick (): void{
    if(this.isPause){
      return;
    }
    if(--this.seconds <= 0){
      clearInterval(this.intervalId);
      this.complete.emit(null);
    }
    this.progress.emit(this.seconds);
  }


  ngOnInit() {
  }

}
