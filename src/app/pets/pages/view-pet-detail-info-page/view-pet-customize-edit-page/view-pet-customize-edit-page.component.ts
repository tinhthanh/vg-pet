import { NgTemplateOutlet } from "@angular/common";
import { Component, OnInit, Type, ViewEncapsulation } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonNav,
  IonNavLink,
  IonRow,
  IonToolbar,
} from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { trashOutline } from "ionicons/icons";
import { NzInputModule } from "ng-zorro-antd/input";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { ButtonIconCircleComponent } from "src/app/components/button-icon-circle/button-icon-circle.component";

const nzImports: (Type<any> | ReadonlyArray<any>)[] = [NzInputModule];
const ionImports: (Type<any> | ReadonlyArray<any>)[] = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonNavLink,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  BackButtonComponent,
  TranslateModule,
  NgTemplateOutlet,
  FormsModule,
  ReactiveFormsModule,
  ButtonIconCircleComponent,
];
const ionIcons: {
  [name: string]: string;
} = {
  trashOutline,
};

@Component({
  selector: "app-view-pet-customize-edit-page",
  templateUrl: "./view-pet-customize-edit-page.component.html",
  styleUrls: ["./view-pet-customize-edit-page.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
  encapsulation: ViewEncapsulation.None,
})
export class ViewPetCustomizeEditPageComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private nav: IonNav, private fb: FormBuilder) {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      customizeList: this.fb.array([]),
    });
  }

  get customizeListControl(): FormArray {
    return this.formGroup.get("customizeList") as FormArray;
  }

  onAdd() {
    this.customizeListControl.push(
      this.fb.group({
        name: [null, []],
        value: [null, []],
      })
    );
  }

  onRemove(index: number) {
    this.customizeListControl.removeAt(index);
  }

  onSave() {}
}
