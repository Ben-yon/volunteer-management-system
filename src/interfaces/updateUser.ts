export interface UpdateUserInfo {
    id: string | undefined;
    userInfo:{
        "email": string | undefined,
        "firstName": string | undefined,
        "lastName": string | undefined,
        "profilePicture": string | undefined
      }
}