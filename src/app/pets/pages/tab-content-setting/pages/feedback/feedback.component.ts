import { Component, OnInit, Type } from "@angular/core";
import { IonIcon } from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { chatbubblesOutline } from "ionicons/icons";
import { SettingLayoutComponent } from "src/app/components/tab-setting/setting-layout/setting-layout.component";

const ionImports: (Type<any> | ReadonlyArray<any>)[] = [IonIcon];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  SettingLayoutComponent,
  TranslateModule,
];
const ionIcons: {
  [name: string]: string;
} = {
  chatbubblesOutline,
};

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports],
})
export class FeedbackComponent implements OnInit {
  constructor() {
    addIcons(ionIcons);
  }

  ngOnInit() {}
}
