import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, Type } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonNav,
  IonRow,
  IonToolbar
} from "@ionic/angular/standalone";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { pawOutline } from "ionicons/icons";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzMessageService } from "ng-zorro-antd/message";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { WEIGHT_TYPE } from "src/app/consts/event.const";
import { Schedule } from "src/app/models/schedule.model";

const nzImports: Type<any> | ReadonlyArray<any> = [
  NzInputNumberModule,
  NzDatePickerModule,
  NzInputModule,
];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  CommonModule,
  BackButtonComponent,
  TranslateModule,
  FormsModule,
  ReactiveFormsModule,
];

const ionIcons: {
  [name: string]: string;
} = {
  pawOutline,
};

@Component({
  selector: "app-schedule-weight-remind-page",
  templateUrl: "./schedule-weight-remind-page.component.html",
  styleUrls: ["./schedule-weight-remind-page.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class ScheduleWeightRemindPageComponent implements OnInit {
  @Input() schedule!: Schedule;

  formScheduleWeight!: FormGroup;

  constructor(
    private nav: IonNav,
    private fb: FormBuilder,
    private messageService: NzMessageService,
    private translateService: TranslateService
  ) {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {
    this.formScheduleWeight = this.fb.group({
      type: [this.weightType.PET_WEIGHT, []],

      humanAndPetWeight: this.fb.group({
        first: this.fb.group({
          value: [null, []],
          unit: ["kg", []],
        }),
        second: this.fb.group({
          value: [null, []],
          unit: ["oz", []],
        }),
      }),

      humanWeight: this.fb.group({
        first: this.fb.group({
          value: [null, []],
          unit: ["kg", []],
        }),
        second: this.fb.group({
          value: [null, []],
          unit: ["oz", []],
        }),
      }),

      petWeight: this.fb.group({
        first: this.fb.group({
          value: [null, []],
          unit: ["kg", []],
        }),
        second: this.fb.group({
          value: [null, []],
          unit: ["oz", []],
        }),
      }),

      dateTime: [new Date(), [Validators.required]],
      note: [null, []],
    });
  }

  get weightType() {
    return WEIGHT_TYPE;
  }

  get typeControl(): FormControl {
    return this.formScheduleWeight.get("type") as FormControl;
  }

  get humanAndPetWeightFirst(): FormGroup {
    return this.formScheduleWeight.get("humanAndPetWeight.first") as FormGroup;
  }

  get humanAndPetWeightSecond(): FormGroup {
    return this.formScheduleWeight.get("humanAndPetWeight.second") as FormGroup;
  }

  get humanWeightFirst(): FormGroup {
    return this.formScheduleWeight.get("humanWeight.first") as FormGroup;
  }

  get humanWeightSecond(): FormGroup {
    return this.formScheduleWeight.get("humanWeight.second") as FormGroup;
  }

  get petWeightFirst(): FormGroup {
    return this.formScheduleWeight.get("petWeight.first") as FormGroup;
  }

  get petWeightSecond(): FormGroup {
    return this.formScheduleWeight.get("petWeight.second") as FormGroup;
  }

  submit() {
    this.nav.popToRoot();
    this.messageService.success(
      this.translateService.instant("MESSAGE.SUCCESS_ADD_SCHEDULE")
    );
  }
}
