import { Component, OnInit, Type } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { checkmarkOutline, closeOutline } from "ionicons/icons";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { Subject, takeUntil } from "rxjs";
import { ConfigurationService } from "src/app/services/configuration.service";

const nzImports: (Type<any> | ReadonlyArray<any>)[] = [
  NzFormModule,
  NzSwitchModule,
];
const ionImports: (Type<any> | ReadonlyArray<any>)[] = [];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  TranslateModule,
  FormsModule,
  ReactiveFormsModule,
];
const ionIcons: {
  [name: string]: string;
} = {
  checkmarkOutline,
  closeOutline,
};

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class NotificationsComponent implements OnInit {
  formNotification!: FormGroup;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private configurationService: ConfigurationService,
    private messageService: NzMessageService,
    private translateService: TranslateService
  ) {
    addIcons(ionIcons);
    this.initialForm();
  }

  ngOnInit(): void {
    this.getNotification();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initialForm() {
    this.formNotification = this.fb.group({
      learningConfig: [true, []],
      appUpdate: [true, []],
      vibrateNotification: [true, []],
    });
  }

  getNotification() {
    const notification = this.configurationService.notificationSubject;
    if (notification.getValue()) {
      this.formNotification.patchValue({ ...notification.getValue() });
    }
    this.formNotification.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.configurationService.setNotification(value);
        this.messageService.success(
          this.translateService.instant("MESSAGE.SUCCESS_UPDATE_NOTIFICATION")
        );
      });
  }

  submit() {
    console.log(this.formNotification.value);
  }
}
