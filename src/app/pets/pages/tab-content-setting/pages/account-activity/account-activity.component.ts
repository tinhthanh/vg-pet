import { Component, OnInit, Type } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { powerOutline } from "ionicons/icons";
import { Subject } from "rxjs";
import { TranslateModule } from "@ngx-translate/core";
import { SettingLayoutComponent } from "src/app/components/tab-setting/setting-layout/setting-layout.component";

const ionImports: (Type<any> | ReadonlyArray<any>)[] = [IonIcon, IonButton];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  SettingLayoutComponent,
  TranslateModule,
];
const ionIcons: {
  [name: string]: string;
} = {
  powerOutline,
};

@Component({
  selector: "app-account-activity",
  templateUrl: "./account-activity.component.html",
  styleUrls: ["./account-activity.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports],
})
export class AccountActivityComponent implements OnInit {
  formPassword!: FormGroup;

  private destroy$: Subject<void> = new Subject<void>();

  displayPassword = {
    current: false,
    new: false,
  };

  constructor() {
    addIcons(ionIcons);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  logout() {
    console.log("Logout Account !!!");
  }

  delete() {
    console.log("Delete Account !!!");
  }
}
