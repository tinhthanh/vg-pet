import { CommonModule } from "@angular/common";
import { Component, OnInit, Type } from "@angular/core";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonNav,
  IonToolbar,
} from "@ionic/angular/standalone";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzMessageService } from "ng-zorro-antd/message";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { UploadFileComponent } from "src/app/components/upload-file/upload-file.component";

const nzImports: Type<any> | ReadonlyArray<any> = [NzInputModule];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonButton
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  CommonModule,
  BackButtonComponent,
  TranslateModule,
  UploadFileComponent
];

const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-schedule-picture-remind-page",
  templateUrl: "./schedule-picture-remind-page.component.html",
  styleUrls: ["./schedule-picture-remind-page.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class SchedulePictureRemindPageComponent implements OnInit {
  constructor(
    private nav: IonNav,
    private messageService: NzMessageService,
    private translateService: TranslateService
  ) {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {}

  submit() {
    this.nav.popToRoot();
    this.messageService.success(
      this.translateService.instant("MESSAGE.SUCCESS_ADD_SCHEDULE")
    );
  }
}
