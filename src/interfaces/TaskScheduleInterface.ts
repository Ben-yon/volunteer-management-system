import { BaseInitialStateInterface } from "./AuthInterface";
export interface CreateTaskInterface {
  name: string;
  description: string;
  notes: string;
}

export interface ScheduleTaskInterface {
  endDateTime: Date | null;
  startDateTime: Date | null;
  Status: string;
  taskId: string;
  notes?: string;
}

export interface VolunteerScheduleTask {
  scheduleTaskId: string;
  volunteerId: string;
  volunteersNote?: string;
  supervisorsNote: string;
}

export interface CreateTaskIntialStateInterface {
  loading: boolean;
  error: string | null;
  isTaskCreated: boolean;
  task: Task;
}

export interface GetTasksInitialStateInterface
  extends BaseInitialStateInterface {
  tasks: Array<Task>;
}

export interface CreateScheduleTaskInitialStateInterface{
  loading: boolean;
  error: string | null;
  isScheduled: boolean;
  scheduledTask: ScheduledTask;
}

export interface GetScheduledTasksInitialStateInterface
  extends BaseInitialStateInterface {
  scheduledTasks: Array<ScheduledTask>;
}

export interface Task {
  id: string;
  name: string;
  description: string;
  notes: string;
  createdDate: string;
  createdBy: string;
  modifiedDate: string;
  modifiedBy: string;
}

interface ScheduledTask {
  id: string;
  taskId: string;
  startDateTime: string;
  endDateTime: string;
  status: string;
  notes: string;
  createdDate: string;
  createdBy: string;
  modifiedDate: string;
  modifiedBy: string;
}
