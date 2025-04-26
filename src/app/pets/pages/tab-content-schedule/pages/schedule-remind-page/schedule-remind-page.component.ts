import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Type } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonContent, IonHeader, IonNav, IonToolbar } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { BackButtonComponent } from 'src/app/components/back-button/back-button.component';
import { RemindTypeEnum } from 'src/app/enums/common.enum';
import { Schedule } from 'src/app/models/schedule.model';
import { ScheduleViewPageComponent } from '../schedule-view-page/schedule-view-page.component';

const nzImports: Type<any> | ReadonlyArray<any> = [NzRadioModule];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonButton,
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  CommonModule,
  BackButtonComponent,
  TranslateModule,
  FormsModule,
  ReactiveFormsModule
];

const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: 'app-schedule-remind-page',
  templateUrl: './schedule-remind-page.component.html',
  styleUrls: ['./schedule-remind-page.component.scss'],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class ScheduleRemindPageComponent implements OnInit {
  @Input() schedule!: Schedule;

  formScheduleRemind!: FormGroup;

  constructor(private nav: IonNav, private fb: FormBuilder) {
    addIcons({ ...ionIcons })
  }

  ngOnInit() {
    this.formScheduleRemind = this.fb.group({
      remindType: [this.remindTypeEnum.AT_TIME, []]
    })
  }

  get remindTypeEnum() {
    return RemindTypeEnum
  }

  get remindTypeControl(): FormControl {
    return this.formScheduleRemind.get("remindType") as FormControl
  }

  submit() {
    if (this.formScheduleRemind.valid) {
      this.schedule.scheduleRemind = this.remindTypeControl.value;
      this.nav.push(ScheduleViewPageComponent, {
        schedule: this.schedule
      });
    } else {
      this.formScheduleRemind.markAllAsTouched();
    }
  }

}
