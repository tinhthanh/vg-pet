import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Type, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonContent, IonHeader, IonNav, IonToolbar } from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BackButtonComponent } from 'src/app/components/back-button/back-button.component';
import { UploadFileComponent } from 'src/app/components/upload-file/upload-file.component';

const nzImports: Type<any> | ReadonlyArray<any> = [
  NzDatePickerModule,
  NzInputModule,
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
  UploadFileComponent
];

const ionIcons: {
  [name: string]: string;
} = {};


@Component({
  selector: 'app-schedule-log-event-remind',
  templateUrl: './schedule-log-event-remind.component.html',
  styleUrls: ['./schedule-log-event-remind.component.scss'],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
  encapsulation: ViewEncapsulation.None
})
export class ScheduleLogEventRemindComponent implements OnInit {
  @Input() event!: any;

  formLogEventRemind = {
    fieldEvent: null,
    dateTime: new Date()
  }

  constructor(
    private nav: IonNav,
    private messageService: NzMessageService,
    private translateService: TranslateService
  ) {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {
  }

  submit() {
    this.nav.popToRoot();
    this.messageService.success(
      this.translateService.instant("MESSAGE.SUCCESS_ADD_SCHEDULE")
    );
  }

}
