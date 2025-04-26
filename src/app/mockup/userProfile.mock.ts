import { EUserGender, EUserRelation } from "../enums/user.enum";
import { IUserProfile } from "../interfaces/user.interface";

export const USER_PROFILE: IUserProfile = {
  firstName: "Tèo Em",
  lastName: "Nguyễn Văn",
  avatarAlt: "Tèo Em",
  email: "teoem.@gmail.com",
  avatarUrl: "",
  gender: EUserGender.MALE,
  relation: [EUserRelation.OWNER],
};
