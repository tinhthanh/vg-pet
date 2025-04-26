import { Component, OnDestroy, OnInit, Type } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { transgenderOutline } from "ionicons/icons";
import { values } from "lodash";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSelectModule } from "ng-zorro-antd/select";
import { Subject, takeUntil, tap } from "rxjs";
import { SettingLayoutComponent } from "src/app/components/tab-setting/setting-layout/setting-layout.component";
import { USER_GENDER, USER_RELATION } from "src/app/consts/common.const";
import { IUserProfile } from "src/app/interfaces/user.interface";
import { UserService } from "src/app/services/user.service";

const nzImports: (Type<any> | ReadonlyArray<any>)[] = [
  NzFormModule,
  NzInputModule,
  NzSelectModule,
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
  transgenderOutline,
};

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class ProfileComponent implements OnInit, OnDestroy {
  formProfile!: FormGroup;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private fb: FormBuilder, private userService: UserService) {
    addIcons(ionIcons);
    this.initialForm();
  }

  ngOnInit() {
    this.getUserProfile();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initialForm() {
    this.formProfile = this.fb.group({
      firstName: [null, []],
      lastName: [null, []],
      email: [null, [Validators.required, Validators.email]],
      gender: [null, []],
      relation: [[this.userRelationEnum.OWNER], []],
    });
  }

  getUserProfile() {
    this.userService
      .getUserProfile()
      .pipe(
        takeUntil(this.destroy$),
        tap((resp: { data: IUserProfile }) => {
          if (resp && resp.data) {
            this.formProfile.patchValue({ ...resp.data });
          }
        })
      )
      .subscribe();
  }

  get userGenderEnum() {
    return USER_GENDER;
  }

  get userGenderList() {
    return values(this.userGenderEnum);
  }

  get userRelationEnum() {
    return USER_RELATION;
  }

  get userRelationList() {
    return values(this.userRelationEnum);
  }

  submit() {
    console.log(this);
  }
}
