import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { PomodoroTimerComponent } from './timer/pomodoro-timer/pomodoro-timer.component';
import { CountdownComponent } from './timer/countdown/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    PomodoroTimerComponent,
    PomodoroTimerComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
