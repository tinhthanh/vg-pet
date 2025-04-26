import { Component, OnDestroy, OnInit, Type } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import {
  calendarOutline,
  earthOutline,
  moonOutline,
  optionsOutline,
  sunnyOutline,
} from "ionicons/icons";
import { values } from "lodash";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { Subject } from "rxjs";
import { SettingLayoutComponent } from "src/app/components/tab-setting/setting-layout/setting-layout.component";
import {
  DATE_FORMAT_DATA,
  LANGUAGES,
  LENGTH_UNIT,
  START_WEEK,
  TEMPERATURE_UNIT,
  WEIGHT_UNIT,
} from "src/app/consts/common.const";
import { ConfigurationService } from "src/app/services/configuration.service";

const nzImports: (Type<any> | ReadonlyArray<any>)[] = [
  NzFormModule,
  NzCheckboxModule,
  NzInputModule,
  NzSelectModule,
  NzSwitchModule,
];
const ionImports: (Type<any> | ReadonlyArray<any>)[] = [IonIcon, IonButton];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  TranslateModule,
  FormsModule,
  ReactiveFormsModule,
  SettingLayoutComponent,
];
const ionIcons: {
  [name: string]: string;
} = {
  optionsOutline,
  earthOutline,
  calendarOutline,
  sunnyOutline,
  moonOutline,
};

@Component({
  selector: "app-setting",
  templateUrl: "./setting.component.html",
  styleUrls: ["./setting.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class SettingComponent implements OnInit, OnDestroy {
  formSetting!: FormGroup;

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
    this.getConfiguration();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initialForm() {
    this.formSetting = this.fb.group({
      theme: this.fb.group({
        isThemeDevice: [false, []],
        isDarkTheme: [false, []],
      }),
      language: [LANGUAGES.VI, []],
      dateFormat: this.fb.group({
        format: [null, []],
        startWeek: [START_WEEK.SUN, []],
      }),
      measurement: this.fb.group({
        lengthUnit: [LENGTH_UNIT.METER, []],
        weightUnit: [WEIGHT_UNIT.POUND, []],
        temperatureUnit: [TEMPERATURE_UNIT.FAHRENHEIT, []],
      }),
    });
  }

  getConfiguration() {
    const configuration = this.configurationService.configurationSubject;
    if (configuration.getValue()) {
      this.formSetting.patchValue({ ...configuration.getValue() });
    }
  }

  get languagesList() {
    return values(LANGUAGES);
  }

  get startWeekList() {
    return values(START_WEEK);
  }

  get dateFormatList() {
    return values(DATE_FORMAT_DATA);
  }

  get lengthUnitList() {
    return values(LENGTH_UNIT);
  }

  get weightUnitList() {
    return values(WEIGHT_UNIT);
  }

  get temperatureUnitList() {
    return values(TEMPERATURE_UNIT);
  }

  get isThemeDeviceControl(): FormControl {
    return this.formSetting.get(["theme", "isThemeDevice"]) as FormControl;
  }

  reset() {
    this.configurationService.resetConfiguration();
    this.getConfiguration();
    this.messageService.success(
      this.translateService.instant("MESSAGE.SUCCESS_UPDATE_SETTING")
    );
  }

  submit() {
    this.configurationService.setConfiguration(this.formSetting.value);
    this.messageService.success(
      this.translateService.instant("MESSAGE.SUCCESS_UPDATE_SETTING")
    );
  }
}
