import { Pipe, PipeTransform } from '@angular/core';
import Queuable from '../interffaces/queuable';

@Pipe({
  name: 'queuedOnly'
})
export default class QueuedOnlyPipe implements PipeTransform {

  transform(queueableItems: Queuable[], ...args): Queuable[] {
    return queueableItems.filter((queueableItem: Queuable) => {
      return queueableItem.queued === args[0];
    });
  }

}
