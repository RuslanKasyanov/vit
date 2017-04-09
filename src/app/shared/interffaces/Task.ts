/**
 * Created by ruslan on 09.04.17.
 */
import {Queueable} from '../shared';

interface Task extends Queueable {
  name: string;
  deadline: Date;
  pomodorosRequired: number;
};

export default Task;

