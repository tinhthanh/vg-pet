import { NgTemplateOutlet } from "@angular/common";
import { Component, OnDestroy, OnInit, Type } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { eyeOffOutline, eyeOutline, lockClosedOutline } from "ionicons/icons";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { Subject } from "rxjs";
import { SettingLayoutComponent } from "src/app/components/tab-setting/setting-layout/setting-layout.component";

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
  NgTemplateOutlet,
];
const ionIcons: {
  [name: string]: string;
} = {
  lockClosedOutline,
  eyeOutline,
  eyeOffOutline,
};

@Component({
  selector: "app-password",
  templateUrl: "./password.component.html",
  styleUrls: ["./password.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class PasswordComponent implements OnInit, OnDestroy {
  formPassword!: FormGroup;

  private destroy$: Subject<void> = new Subject<void>();

  displayPassword = {
    current: false,
    new: false,
  };

  constructor(private fb: FormBuilder) {
    addIcons(ionIcons);
    this.initialForm();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initialForm() {
    this.formPassword = this.fb.group({
      currentPass: [null, []],
      newPass: [null, []],
    });
  }

  submit() {
    console.log(this.formPassword.value);
  }

  displayPasswordCurrent() {
    this.displayPassword.current = !this.displayPassword.current;
  }

  displayPasswordNew() {
    this.displayPassword.new = !this.displayPassword.new;
  }
}
