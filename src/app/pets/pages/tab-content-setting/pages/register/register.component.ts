import { Component, OnInit, Type } from "@angular/core";
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { albumsOutline } from "ionicons/icons";
import { SettingLayoutComponent } from "src/app/components/tab-setting/setting-layout/setting-layout.component";
import { PetImageDefault } from "src/app/consts/pet-image-default.const";

const ionImports: (Type<any> | ReadonlyArray<any>)[] = [IonIcon, IonButton];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  SettingLayoutComponent,
  TranslateModule,
];
const ionIcons: {
  [name: string]: string;
} = {
  albumsOutline,
};

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports],
})
export class RegisterComponent implements OnInit {
  constructor() {
    addIcons(ionIcons);
  }

  ngOnInit() {}

  get petImageDefault() {
    return PetImageDefault;
  }
}
