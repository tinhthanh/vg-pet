import { EPetGender, EPetType } from "../enums/pet.enum";

export interface IPetDetail {
  petType: EPetType;
  avatarUrl: string;
  avatarAlt: string;
  name: string;
  dob: string;
  gender: EPetGender;
  weigh: number;
  vaccination: number;
  picture: number;
  calendar: number;
  log: number;
  owner: number;
}
