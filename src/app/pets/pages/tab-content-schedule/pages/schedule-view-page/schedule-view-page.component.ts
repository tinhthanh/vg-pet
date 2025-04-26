import { CommonModule } from "@angular/common";
import { Component, Input, Type } from "@angular/core";
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
import { repeatOutline } from "ionicons/icons";
import { NzMessageService } from "ng-zorro-antd/message";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { NumberOfRepetitionsEnum } from "src/app/enums/common.enum";
import { Schedule } from "src/app/models/schedule.model";
import { ScheduleService } from "src/app/services/schedule.service";

const nzImports: Type<any> | ReadonlyArray<any> = [];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonIcon,
  IonButton,
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  CommonModule,
  BackButtonComponent,
  TranslateModule,
];

const ionIcons: {
  [name: string]: string;
} = {
  repeatOutline,
};

@Component({
  selector: "app-schedule-view-page",
  templateUrl: "./schedule-view-page.component.html",
  styleUrls: ["./schedule-view-page.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class ScheduleViewPageComponent {
  @Input() schedule: Schedule = new Schedule();

  constructor(
    private nav: IonNav,
    private scheduleService: ScheduleService,
    private messageService: NzMessageService,
    private translateService: TranslateService
  ) {
    addIcons({ ...ionIcons });
  }

  get numberOfRepetitions() {
    return NumberOfRepetitionsEnum;
  }

  get petDetail() {
    return this.schedule.petList.filter(
      (_, index) => this.schedule.checkedPets[index]
    )[0];
  }

  submit() {
    this.scheduleService.addSchedule(this.schedule).subscribe();
    this.nav.popToRoot();
    this.messageService.success(
      this.translateService.instant("MESSAGE.SUCCESS_ADD_SCHEDULE")
    );
  }
}
