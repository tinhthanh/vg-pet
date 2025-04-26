import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonButtons, IonContent, IonHeader, IonNav, IonToolbar } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BackButtonComponent } from 'src/app/components/back-button/back-button.component';
import { Schedule } from 'src/app/models/schedule.model';
import { ScheduleBehaviorPageComponent } from '../schedule-behavior-page/schedule-behavior-page.component';

const nzImports: Type<any> | ReadonlyArray<any> = [NzFormModule, NzInputModule];
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
  ReactiveFormsModule
];

const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: 'app-schedule-desc-page',
  templateUrl: './schedule-desc-page.component.html',
  styleUrls: ['./schedule-desc-page.component.scss'],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class ScheduleDescPageComponent implements OnInit {
  @Input() schedule!: Schedule;

  formScheduleDesc!: FormGroup;

  constructor(private nav: IonNav, private fb: FormBuilder) {
    addIcons({ ...ionIcons })
  }

  ngOnInit() {
    this.formScheduleDesc = this.fb.group({
      desc: [this.schedule.scheduleDesc || null, [Validators.required]]
    })
  }

  submit() {
    if (this.formScheduleDesc.valid) {
      this.schedule.scheduleDesc = this.formScheduleDesc.value.desc;
      this.nav.push(ScheduleBehaviorPageComponent, {
        schedule: this.schedule
      });
    } else {
      this.formScheduleDesc.markAllAsTouched();
    }
  }

}
