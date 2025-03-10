export interface IRole {
  id: string;
  name: string;
}

export interface TokenPayload {
  nameid: string;
  email: string;
  role: string;
  nbf: number;
  exp: number;
  iat: number;
  iss: string;
  aud: string;
}
export interface ILoginUser {
  email: string;
  password?: string;
}
export interface IDataUser {
  id: string;
  userName: string;
  normalizedUserName: string;
  email: string;
  normalizedEmail: string;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumber: string | null;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd: string | null;
  lockoutEnabled: boolean;
  accessFailedCount: number;
  address: string | null;
  block: boolean;
  fullName: string | null;
  phoneNumber2: string | null;
  typeUser: string | null;
  dateAdd: string;
  userUpdate: string;
  dateUpdate: string;
  cityId: string | null;
  city: string | null;
  mainOrders: [];
  roles: IRole[];
}
export interface IOPT {
  otp: "";
  email: string;
  userId: string;
  enabaleChangePassword: boolean;
}
export interface IChangePassword {
  newPassword: string;
  confirmPassword: string;
}
export interface IUser {
  otp: IOPT;
  data: IDataUser;
  status: "idle" | "loading" | "succeeded" | "failed";
}
export interface IPagination {
  totalRowsCount: number;
  totalPagesCount: number;
}
export interface IDataUserAPI {
  id: string;
  userName: string;
  email: string;
  emailConfirmed: boolean;
  phoneNumber: string | null;
  address: string | null;
  block: boolean;
  fullName: string | null;
  phoneNumber2: string | null;
  typeUser: string | null;
  city: string | null;
}
export interface IUserAPI {
  rows: IDataUserAPI[];
  paginationInfo: IPagination;
}
