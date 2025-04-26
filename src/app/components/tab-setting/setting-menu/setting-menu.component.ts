import { NgTemplateOutlet } from "@angular/common";
import { Component, Input, OnInit, Type } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar,
} from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import {
  camera,
  chatbubbleEllipsesOutline,
  informationCircleOutline,
  lockClosedOutline,
  logInOutline,
  notificationsOutline,
  peopleOutline,
  personOutline,
  ribbonOutline,
  settingsOutline,
} from "ionicons/icons";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { MENUS } from "src/app/common/menus.const";
import { MenusModel } from "src/app/models/menu.model";
import { UserService } from "src/app/services/user.service";

const nzImports: Type<any> | ReadonlyArray<any> = [NzMenuModule];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonHeader,
  IonContent,
  IonToolbar,
  IonIcon,
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  NgTemplateOutlet,
  RouterLink,
  TranslateModule
];
const ionIcons: {
  [name: string]: string;
} = {
  camera,
  personOutline,
  lockClosedOutline,
  settingsOutline,
  notificationsOutline,
  peopleOutline,
  ribbonOutline,
  chatbubbleEllipsesOutline,
  informationCircleOutline,
  logInOutline,
};

@Component({
  selector: "app-setting-menu",
  templateUrl: "./setting-menu.component.html",
  styleUrls: ["./setting-menu.component.scss"],
  standalone: true,
  imports: [...ionImports, ...nzImports, ...coreImports],
})
export class SettingMenuComponent implements OnInit {
  @Input() userProfile: any;

  menusModel: MenusModel = new MenusModel(MENUS);
  fullname: string = "";

  constructor(private userService: UserService) {
    addIcons(ionIcons);
  }

  ngOnInit() {
    this.fullname = this.userService.getFullname(this.userProfile);
  }

  get menus() {
    return this.menusModel.menus;
  }
}
