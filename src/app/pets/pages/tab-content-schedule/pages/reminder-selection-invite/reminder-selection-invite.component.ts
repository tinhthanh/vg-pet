import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, Type } from "@angular/core";
import { IonButton, IonButtons, IonContent, IonHeader, IonNav, IonToolbar } from "@ionic/angular/standalone";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { values } from "lodash";
import { NzMessageService } from "ng-zorro-antd/message";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { REMINDER_LEVEL_LIST, REMINDER_LIST } from "src/app/consts/reminder.const";
import { ReminderListConfig } from "src/app/interfaces/common.interface";
import { IPetDetail } from "src/app/interfaces/pet.interface";
import { Schedule } from "src/app/models/schedule.model";

const nzImports: Type<any> | ReadonlyArray<any> = [];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonButton
];
const coreImports: Type<any> | ReadonlyArray<any> = [CommonModule, BackButtonComponent, TranslateModule];

const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: 'app-reminder-selection-invite',
  templateUrl: './reminder-selection-invite.component.html',
  styleUrls: ['./reminder-selection-invite.component.scss'],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class ReminderSelectionInviteComponent implements OnInit {
  @Input() schedule!: Schedule;
  petDetail: IPetDetail | null = null;

  formInvite: {
    role: ReminderListConfig | null,
    level: ReminderListConfig | null
  } = {
    role: null,
    level: null
  }

  constructor(
    private nav: IonNav,
    private messageService: NzMessageService,
    private translateService: TranslateService
  ) {
    addIcons({ ...ionIcons })
  }

  ngOnInit(): void {
    this.petDetail = this.getPetDetailFromSchedule(this.schedule);
  }

  get reminderConfigList() {
    return REMINDER_LIST;
  }

  get reminderConfigListOptions() {
    return values(this.reminderConfigList);
  }

  get reminderConfigLevelList() {
    return REMINDER_LEVEL_LIST;
  }

  get reminderConfigLevelListOptions() {
    return values(this.reminderConfigLevelList);
  }

  getPetDetailFromSchedule(schedule: Schedule) {
    return schedule.petList.filter((_, index) => schedule.checkedPets[index])[0]
  }

  onSelectRole(reminder: ReminderListConfig) {
    this.formInvite.role = reminder;
  }

  onSelectLevel(level: ReminderListConfig) {
    this.formInvite.level = level;
  }

  submit() {
    this.nav.popToRoot();
    this.messageService.success(
      this.translateService.instant("MESSAGE.SUCCESS_ADD_SCHEDULE")
    );
  }
}
