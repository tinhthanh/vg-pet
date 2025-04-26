import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, Type } from "@angular/core";
import { IonButton, IonButtons, IonContent, IonHeader, IonNav, IonNavLink, IonToolbar } from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { values } from "lodash";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { REMINDER_LIST } from "src/app/consts/reminder.const";
import { ScheduleEventTypeConfig } from "src/app/interfaces/common.interface";
import { IPetDetail } from "src/app/interfaces/pet.interface";
import { Schedule } from "src/app/models/schedule.model";
import { ReminderSelectionInviteComponent } from "../reminder-selection-invite/reminder-selection-invite.component";
import { ScheduleDescPageComponent } from "../schedule-desc-page/schedule-desc-page.component";

const nzImports: Type<any> | ReadonlyArray<any> = [];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonButton,
  IonNavLink
];
const coreImports: Type<any> | ReadonlyArray<any> = [CommonModule, BackButtonComponent, TranslateModule];

const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: 'app-reminder-selection-page',
  templateUrl: './reminder-selection-page.component.html',
  styleUrls: ['./reminder-selection-page.component.scss'],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class ReminderSelectionPageComponent implements OnInit {
  @Input() schedule!: Schedule;

  petDetail: IPetDetail | null = null;

  constructor(private nav: IonNav) {
    addIcons({ ...ionIcons })
  }

  ngOnInit(): void {
    this.petDetail = this.getPetDetailFromSchedule(this.schedule);
  }

  get reminderSelectionInviteComponent() {
    return ReminderSelectionInviteComponent
  }

  getPetDetailFromSchedule(schedule: Schedule) {
    return schedule.petList.filter((_, index) => schedule.checkedPets[index])[0]
  }
}
