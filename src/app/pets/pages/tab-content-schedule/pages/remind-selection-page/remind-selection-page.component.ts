import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, Type } from "@angular/core";
import { IonButtons, IonContent, IonHeader, IonNav, IonToolbar } from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { EVENT_TYPE_CONFIG_LIST } from "src/app/consts/event.const";
import { ScheduleEventTypeConfig } from "src/app/interfaces/common.interface";
import { Schedule } from "src/app/models/schedule.model";
import { ScheduleDescPageComponent } from "../schedule-desc-page/schedule-desc-page.component";

const nzImports: Type<any> | ReadonlyArray<any> = [];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
];
const coreImports: Type<any> | ReadonlyArray<any> = [CommonModule, BackButtonComponent, TranslateModule];

const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: 'app-remind-selection-page',
  templateUrl: './remind-selection-page.component.html',
  styleUrls: ['./remind-selection-page.component.scss'],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class RemindSelectionPageComponent {
  @Input() schedule!: Schedule;

  constructor(private nav: IonNav) {
    addIcons({ ...ionIcons })
  }

  get eventTypeConfigList() {
    return EVENT_TYPE_CONFIG_LIST
  }

  onSelectEventType(eventType: ScheduleEventTypeConfig) {
    this.schedule.scheduleEvent = eventType;
    this.nav.push(ScheduleDescPageComponent, {
      schedule: this.schedule
    });
  } 
}
