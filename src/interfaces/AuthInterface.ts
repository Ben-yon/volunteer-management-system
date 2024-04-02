export interface AuthStateInterface {
    loading: boolean;
    userInfo: {}; // Consider refining the type based on your user data structure
    userToken: string | null;
    error: string | null;
    success: boolean;
  }