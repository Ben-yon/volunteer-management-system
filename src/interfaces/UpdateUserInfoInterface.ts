import { UserRole } from "./AuthInterface";

export interface UpdateUserInfo {
  id: string | undefined;
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  profilePicture: string | undefined;
  designation: string | undefined;
  contact: string | undefined;
  roles: UserRole[];
}
