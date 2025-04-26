import { CommonModule } from "@angular/common";
import { Component, Input, Type } from "@angular/core";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonNav,
  IonToolbar,
} from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { EVENT_TYPE_CONFIG, EVENT_TYPE_CONFIG_LIST, REMIND_TYPE_CONFIG_LIST } from "src/app/consts/event.const";
import { ScheduleEventTypeConfig } from "src/app/interfaces/common.interface";
import { Schedule } from "src/app/models/schedule.model";
import { ScheduleDescPageComponent } from "../schedule-desc-page/schedule-desc-page.component";
import { ScheduleWeightRemindPageComponent } from "../schedule-weight-remind-page/schedule-weight-remind-page.component";
import { SchedulePictureRemindPageComponent } from "../schedule-picture-remind-page/schedule-picture-remind-page.component";
import { ScheduleVaccineRemindPageComponent } from "../schedule-vaccine-remind-page/schedule-vaccine-remind-page.component";
import { ScheduleLogRemindPageComponent } from "../schedule-log-remind-page/schedule-log-remind-page.component";

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
];

const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-reminded-selection-page",
  templateUrl: "./reminded-selection-page.component.html",
  styleUrls: ["./reminded-selection-page.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class RemindedSelectionPageComponent {
  @Input() schedule!: Schedule;

  constructor(private nav: IonNav) {
    addIcons({ ...ionIcons });
  }

  get remindTypeConfigList() {
    return REMIND_TYPE_CONFIG_LIST;
  }

  onSelectEventType(eventType: ScheduleEventTypeConfig) {
    this.schedule.scheduleEvent = eventType;
    const componentProps = {
      schedule: this.schedule,
    };
    switch (eventType.label) {
      case EVENT_TYPE_CONFIG.WEIGHT.label:
        this.nav.push(ScheduleWeightRemindPageComponent, componentProps);
        break;
      case EVENT_TYPE_CONFIG.PHOTOS.label:
        this.nav.push(SchedulePictureRemindPageComponent, componentProps);
        break;
      case EVENT_TYPE_CONFIG.VACCINES.label:
        this.nav.push(ScheduleVaccineRemindPageComponent, componentProps);
        break;
      case EVENT_TYPE_CONFIG.OTHER.label:
        this.nav.push(ScheduleLogRemindPageComponent, componentProps);
        break;
      default:
        this.nav.popToRoot();
        break;
    }
  }
}
