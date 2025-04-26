import { CommonModule } from "@angular/common";
import { Component, OnInit, Type } from "@angular/core";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonNav,
  IonToolbar,
} from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { EVENT_TYPE_CONFIG_LIST } from "src/app/consts/event.const";
import { ScheduleEventTypeConfig } from "src/app/interfaces/common.interface";
import { ScheduleLogEventRemindComponent } from "../schedule-log-event-remind/schedule-log-event-remind.component";

const nzImports: Type<any> | ReadonlyArray<any> = [];
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
];

const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-schedule-log-remind-page",
  templateUrl: "./schedule-log-remind-page.component.html",
  styleUrls: ["./schedule-log-remind-page.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class ScheduleLogRemindPageComponent implements OnInit {
  constructor(private nav: IonNav) {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {}

  get eventTypeConfigList() {
    return EVENT_TYPE_CONFIG_LIST
  }

  onSelectEventType(eventSelected: ScheduleEventTypeConfig) {
    this.nav.push(ScheduleLogEventRemindComponent, {
      event: eventSelected
    });
  } 
}
