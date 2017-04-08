import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { PomodoroTimerComponent } from './timer/pomodoro-timer/pomodoro-timer.component';
import { CountdownComponent } from './timer/countdown/countdown.component';
import { PomodoroTasksComponent } from './timer/pomodoro-tasks/pomodoro-tasks.component';
import { PomodoreTaskIconsComponent } from './timer/pomodore-task-icons/pomodore-task-icons.component';
import { TaskDirective } from './timer/task.directive';
import { QueuedOnlyPipe } from './shared/pipes/queued-only.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PomodoroTimerComponent,
    PomodoroTimerComponent,
    CountdownComponent,
    PomodoroTasksComponent,
    PomodoreTaskIconsComponent,
    TaskDirective,
    QueuedOnlyPipe
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
