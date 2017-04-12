/**
 * Created by ruslan on 09.04.17.
 */
import Queueable from './interffaces/queuable';
import Task from './interffaces/Task';

import FormattedTimePipe from './pipes/formatted-time.pipe';
import QueuedOnlyPipe from './pipes/queued-only.pipe';

import TaskService from './service/task.service';
import SettingsService from './service/settings.service';

const SHARED_PIPES: any[] = [
  FormattedTimePipe,
  QueuedOnlyPipe
];

const SHARED_PROVIDERS: any[] = [
  TaskService,
  SettingsService
];

export {
  Queueable,
  Task,

  FormattedTimePipe,
  QueuedOnlyPipe,
  SHARED_PIPES,

  TaskService,
  SettingsService,
  SHARED_PROVIDERS
};
