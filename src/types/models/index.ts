import { USER_TYPE_ENUM } from "../enums";

export interface ISignup {
  user_type: USER_TYPE_ENUM;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  country: string;
  password: string;
  message?: string;
  status?: string;
  user_active_status?: string;
  user_id?: number;
}
