import { CommonModule } from "@angular/common";
import { Component, OnInit, Type } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonNav,
  IonToolbar,
} from "@ionic/angular/standalone";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { values } from "lodash";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzSelectModule } from "ng-zorro-antd/select";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { VACCINE_LIST } from "src/app/consts/vaccine.const";

const nzImports: Type<any> | ReadonlyArray<any> = [
  NzSelectModule,
  NzDatePickerModule,
  NzInputModule,
  NzCheckboxModule,
];
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
  FormsModule,
];

const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-schedule-vaccine-remind-page",
  templateUrl: "./schedule-vaccine-remind-page.component.html",
  styleUrls: ["./schedule-vaccine-remind-page.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class ScheduleVaccineRemindPageComponent implements OnInit {
  formVaccineRemind: any = {
    vaccine: null,
    dateTime: new Date(),
    expiredDate: null,
    description: null,
    isRemind: false,
  };

  constructor(
    private nav: IonNav,
    private messageService: NzMessageService,
    private translateService: TranslateService
  ) {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {}

  get vaccineList() {
    return VACCINE_LIST;
  }

  get vaccineListOptions() {
    return values(this.vaccineList);
  }

  submit() {
    this.nav.popToRoot();
    this.messageService.success(
      this.translateService.instant("MESSAGE.SUCCESS_ADD_SCHEDULE")
    );
  }
}
