import { EUserGender, EUserRelation } from "../enums/user.enum";

export interface IUserProfile {
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  avatarAlt?: string;
  email?: string;
  gender?: EUserGender;
  relation?: EUserRelation[];
}
