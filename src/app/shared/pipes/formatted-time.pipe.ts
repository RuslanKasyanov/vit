import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FormattedTimePipe'
})
export default class FormattedTimePipe implements PipeTransform {

  transform(totalMinutes: number): string {
    const minutes: number =  totalMinutes % 60;
    const hours: number = Math.floor(totalMinutes / 60);
    return  `${hours}h: ${minutes}m`;
  }

}
