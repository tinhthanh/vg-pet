import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ReloadService {
  private reloadSubject = new BehaviorSubject<void>(undefined);

  get reload$() {
    return this.reloadSubject.asObservable();
  }

  triggerReload() {
    this.reloadSubject.next();
  }
}
