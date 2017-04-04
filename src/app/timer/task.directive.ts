import {Directive, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appTask]'
})
export class TaskDirective {

  private defaultTooltipText: string;
  @Input() task: Task;
  @Input() taskTooltip: any;
  @HostListener('mouseover') onMouseOver() {
    if (!this.defaultTooltipText && this.taskTooltip) {
      this.defaultTooltipText = this.taskTooltip.innerText;
    }
    this.taskTooltip.innerText = this.task.name;
  }
  @HostListener('mouseout') onMouseOut () {
    if(this.taskTooltip) {
      this.taskTooltip.innerText = this.defaultTooltipText;
    }
  }
  constructor() { }

}
