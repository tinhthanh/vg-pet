import { Component, OnDestroy, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  IonContent,
  IonHeader,
  IonMenu,
  MenuController
} from "@ionic/angular/standalone";
import { Subject, takeUntil, tap } from "rxjs";
import { SettingMenuComponent } from "src/app/components/tab-setting/setting-menu/setting-menu.component";
import { IUserProfile } from "src/app/interfaces/user.interface";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-tab-content-setting",
  templateUrl: "./tab-content-setting.component.html",
  styleUrls: ["./tab-content-setting.component.scss"],
  standalone: true,
  imports: [
    IonHeader,
    IonContent,
    IonMenu,
    SettingMenuComponent,
    RouterOutlet,
  ],
})
export class TabContentSettingComponent implements OnInit, OnDestroy {
  userProfile: IUserProfile = {};

  private destroy$: Subject<void> = new Subject<void>();
  constructor(
    private menuCtrl: MenuController,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService
      .getUserProfile()
      .pipe(
        takeUntil(this.destroy$),
        tap((resp: { data: IUserProfile }) => {
          if (resp && resp.data) {
            this.userProfile = resp.data;
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openMenu() {
    this.menuCtrl.open("menu-setting");
  }
}
