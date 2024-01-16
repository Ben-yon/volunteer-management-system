import Dexie, { Table } from "dexie";
import { FormDataInterface } from "../interfaces/FormDataInterface";

export class localStorage extends Dexie {
  userDetails!: Table<FormDataInterface>;

  constructor() {
    super("myDatabase");
    this.version(1).stores({
      userDetails:
        "firstName, lastName, dateOfBirth, daysOfMonth, address, streetAddress, city, province, postalCode, occupation, skills, interest",
    });
  }
}

export const db = new localStorage();
