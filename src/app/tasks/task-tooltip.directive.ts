import { Directive, Input, HostListener } from '@angular/core';
import {Task} from '../shared/shared';

@Directive({
  selector: '[appTaskTooltip]'
})
export default class TaskTooltipDirective {
  private defaultTooltipText: string;
  @Input() task: Task;
  @Input() taskToolTip: any;

  @HostListener('mouseover')
  onMouseOver() {
    if(!this.defaultTooltipText && this.taskToolTip){
      this.defaultTooltipText = this.taskToolTip.innerText;
    }
    this.taskToolTip.innerText = this.task.name;
  }

  @HostListener('mouseout')
  onMouseOut() {
    if(this.taskToolTip){
      this.taskToolTip.innerText = this.defaultTooltipText;
    }
  }

  constructor() { }

}
