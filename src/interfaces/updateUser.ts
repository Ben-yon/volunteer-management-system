export interface UpdateUserInfo {
    id: string;
    userInfo:{
        "email": string,
        "firstName": string,
        "lastName": string,
        "password": string,
        "profilePicture": string
      }
}