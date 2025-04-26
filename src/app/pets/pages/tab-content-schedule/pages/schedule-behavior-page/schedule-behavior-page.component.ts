import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, Input, OnInit, Type, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonNav, IonRow, IonToolbar } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BackButtonComponent } from 'src/app/components/back-button/back-button.component';
import { FrequencyEnum, NumberOfRepetitionsEnum } from 'src/app/enums/common.enum';
import { Schedule } from 'src/app/models/schedule.model';
import { repeatOutline } from 'ionicons/icons';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FrequencyOptions } from 'src/app/consts/common.const';
import { ScheduleRemindPageComponent } from '../schedule-remind-page/schedule-remind-page.component';
import { getHours, getMinutes, getSeconds, isBefore, isSameDay, setMilliseconds, setSeconds, startOfDay } from 'date-fns';

const nzImports: Type<any> | ReadonlyArray<any> = [
  NzFormModule, 
  NzInputModule, 
  NzRadioModule, 
  NzDatePickerModule,
  NzSelectModule
];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonIcon,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  CommonModule,
  BackButtonComponent,
  TranslateModule,
  NgTemplateOutlet,
  FormsModule,
  ReactiveFormsModule
];

const ionIcons: {
  [name: string]: string;
} = {
  repeatOutline
};

@Component({
  selector: 'app-schedule-behavior-page',
  templateUrl: './schedule-behavior-page.component.html',
  styleUrls: ['./schedule-behavior-page.component.scss'],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
  encapsulation: ViewEncapsulation.None
})
export class ScheduleBehaviorPageComponent implements OnInit {
  @Input() schedule!: Schedule;

  formScheduleBehavior!: FormGroup;

  today = new Date();
  
  disabledDate = (current: Date): boolean => {
    return isBefore(current, startOfDay(new Date()));
  };

  range = (start: number, end: number): number[] => {
    return Array.from({ length: end - start }, (_, i) => start + i);
  };
  
  constructor(private nav: IonNav, private fb: FormBuilder) {
    addIcons({ ...ionIcons })
  }

  ngOnInit() {
    this.formScheduleBehavior = this.fb.group({
      numberOfRepetitions: [this.numberOfRepetitionsEnum.ONCE, []],
      startDateTime: [new Date(), [Validators.required]],

      frequencyNumber: [2, []],
      frequencyUnit: [this.frequencyEnum.WEEKS, []],

      endDateTime: [null, []],
    })
  }

  get numberOfRepetitionsEnum() {
    return NumberOfRepetitionsEnum
  }

  get frequencyEnum() {
    return FrequencyEnum
  }

  get numberOfRepetitionsControl(): FormControl {
    return this.formScheduleBehavior.get("numberOfRepetitions") as FormControl;
  }

  get isOnce() {
    return this.numberOfRepetitionsControl.value === this.numberOfRepetitionsEnum.ONCE
  }

  get isRepeat() {
    return this.numberOfRepetitionsControl.value === this.numberOfRepetitionsEnum.REPEAT
  }

  get frequencyList(): number[] {
    return Array.from({ length: 48 }, (_, index) => index + 1)
  }

  get frequencyUnitOptions() {
    return FrequencyOptions
  }

  submit() {
    if (this.formScheduleBehavior.valid) {
      const behaviorPayload = {
        ...this.formScheduleBehavior.value,
        startDateTime: setMilliseconds(setSeconds(this.formScheduleBehavior.value.startDateTime, 0), 0),
        endDateTime: setMilliseconds(setSeconds(this.formScheduleBehavior.value.endDateTime, 0), 0),
      };
      this.schedule.scheduleBehavior = behaviorPayload;
      this.nav.push(ScheduleRemindPageComponent, {
        schedule: this.schedule
      });
    } else {
      this.formScheduleBehavior.markAllAsTouched();
    }
  }

}
