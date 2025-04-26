import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IUserProfile } from "../interfaces/user.interface";
import { USER_PROFILE } from "../mockup/userProfile.mock";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor() {}

  getUserProfile(): Observable<{ data: IUserProfile }> {
    return of({
      data: USER_PROFILE,
    });
  }

  getFullname(userProfile: IUserProfile): string {
    return (
      (userProfile?.lastName || "") +
      " " +
      (userProfile?.firstName || "")
    ).trim();
  }
}
