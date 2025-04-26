import { Injectable } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class RoutersService {
  constructor(private router: Router) {}

  push(commands: any[], extras?: NavigationExtras): Promise<boolean> {
    return this.router.navigate(commands, extras);
  }
}
