import { BaseInitialStateInterface } from "./AuthInterface";
export interface CreateTaskInterface {
  name: string;
  description: string;
  notes: string;
}

export interface ScheduleTaskInterface {
  endDateTime: Date;
  startDateTime: Date;
  status: string;
  taskId: string;
  notes?: string;
}

export interface VolunteerScheduleTask {
  scheduleTaskId: string;
  volunteerId: string;
  volunteersNote?: string;
  supervisorsNote: string;
}

export interface CreateTaskIntialStateInterface
  extends BaseInitialStateInterface {
  task: Task;
}

export interface GetTasksInitialStateInterface
  extends BaseInitialStateInterface {
  tasks: Array<Task>;
}

export interface CreateScheduleTaskInitialStateInterface extends BaseInitialStateInterface{
  scheduledTask: ScheduledTask;
}

export interface GetScheduledTasksInitialStateInterface
  extends BaseInitialStateInterface {
  scheduledTasks: Array<ScheduledTask>;
}

interface Task {
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
