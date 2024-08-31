import { BaseInitialStateInterface } from "./AuthInterface";
export interface CreateTaskInterface {
  name: string;
  description: string;
  notes: string;
}

export interface CreateTaskIntialStateInterface extends BaseInitialStateInterface {
  task: Task;
}

export interface GetTasksInitialStateInterface
  extends BaseInitialStateInterface {
  tasks: Array<Task>;
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
