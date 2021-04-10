export interface UserModel {
  userId?: number;
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
  idUserType?: number;
  token?: string;
}
