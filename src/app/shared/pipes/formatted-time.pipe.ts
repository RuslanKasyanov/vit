import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattedTime'
})
export class FormattedTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
