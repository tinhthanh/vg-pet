import { Component, OnInit, Type } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { IonIcon } from "@ionic/angular/standalone";
import {
  globeOutline,
  happyOutline,
  informationCircleOutline,
  logoFacebook,
  logoInstagram,
  logoLinkedin,
  peopleOutline,
} from "ionicons/icons";
import { SettingLayoutComponent } from "src/app/components/tab-setting/setting-layout/setting-layout.component";

const ionImports: (Type<any> | ReadonlyArray<any>)[] = [IonIcon];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  SettingLayoutComponent,
  TranslateModule,
];
const ionIcons: {
  [name: string]: string;
} = {
  informationCircleOutline,
  happyOutline,
  peopleOutline,
  logoInstagram,
  logoFacebook,
  globeOutline,
  logoLinkedin,
};

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports],
})
export class AboutComponent implements OnInit {
  constructor() {
    addIcons(ionIcons);
  }

  ngOnInit() {}
}
