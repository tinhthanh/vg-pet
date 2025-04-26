import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, Type } from "@angular/core";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonNav,
  IonToolbar,
} from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { values } from "lodash";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { ButtonConfigCardComponent } from "src/app/components/button-config-card/button-config-card.component";
import { SCHEDULE_TYPE_CONFIG } from "src/app/consts/common.const";
import { ScheduleTypeConfig } from "src/app/interfaces/common.interface";
import { Schedule } from "src/app/models/schedule.model";
import { RemindedSelectionPageComponent } from "../reminded-selection-page/reminded-selection-page.component";
import { ScheduleTypeEnum } from "src/app/enums/common.enum";
import { RemindSelectionPageComponent } from "../remind-selection-page/remind-selection-page.component";
import { ReminderSelectionPageComponent } from "../reminder-selection-page/reminder-selection-page.component";

const nzImports: Type<any> | ReadonlyArray<any> = [];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  CommonModule,
  BackButtonComponent,
  TranslateModule,
  ButtonConfigCardComponent,
];

const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-schedule-type-selection-page",
  templateUrl: "./schedule-type-selection-page.component.html",
  styleUrls: ["./schedule-type-selection-page.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class ScheduleTypeSelectionPageComponent implements OnInit {
  @Input() schedule!: Schedule;

  constructor(private nav: IonNav) {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {
    console.log(this.schedule);
  }

  get scheduleTypeList() {
    return values(SCHEDULE_TYPE_CONFIG);
  }

  get scheduleTypeEnum() {
    return ScheduleTypeEnum;
  }

  onSelectScheduleType(scheduleType: ScheduleTypeConfig) {
    this.schedule.scheduleType = scheduleType;
    const componentProps = {
      schedule: this.schedule,
    };
    switch (scheduleType.code) {
      case ScheduleTypeEnum.REMIND:
        this.nav.push(RemindSelectionPageComponent, componentProps);
        break;
      case ScheduleTypeEnum.REMINDED:
        this.nav.push(RemindedSelectionPageComponent, componentProps);
        break;
      case ScheduleTypeEnum.REMINDER:
        this.nav.push(ReminderSelectionPageComponent, componentProps);
        break;
      case ScheduleTypeEnum.DOCUMENT:
        this.nav.push(RemindedSelectionPageComponent, componentProps);
        break;
      default:
        this.nav.popToRoot();
        break;
    }
  }
}
