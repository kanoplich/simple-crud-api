export interface IData {
  user: IUser[];
}

export interface IUser {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

export interface IResponse {
  code: number;
  data: string;
}
