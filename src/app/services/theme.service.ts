import { Injectable } from "@angular/core";
import { NzConfigService } from "ng-zorro-antd/core/config";
import { THEME } from "../common/theme.const";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  constructor(private nzConfigService: NzConfigService) {}

  getCssVariable(variable: string): string {
    return getComputedStyle(document.body)
      .getPropertyValue(variable)
      .trim();
  }

  changeTheme(theme: string) {
    document.body.classList.toggle("dark", theme === THEME.DARK);
    setTimeout(() => {
      const textColor = this.getCssVariable("--ion-text-color");
      this.nzConfigService.set("theme", { primaryColor: textColor });
    }, 320);
  }
}
