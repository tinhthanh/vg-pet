import { NgTemplateOutlet } from "@angular/common";
import { Component, OnInit, Type } from "@angular/core";
import {
  FormBuilder,
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
  IonNavLink,
  IonRow,
  IonToolbar,
} from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { EPetGender } from "src/app/enums/pet.enum";
import { GenderIconPipe } from "src/app/pipes/gender-icon.pipe";
import { AddPetPageStep2Component } from "../add-pet-page-step2/add-pet-page-step2.component";

const nzImports: (Type<any> | ReadonlyArray<any>)[] = [
  NzFormModule,
  NzInputModule,
  NzDatePickerModule,
  NzRadioModule,
];
const ionImports: (Type<any> | ReadonlyArray<any>)[] = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonNavLink,
  IonButton,
  IonRow,
  IonCol,
  IonGrid,
];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  BackButtonComponent,
  TranslateModule,
  NgTemplateOutlet,
  FormsModule,
  ReactiveFormsModule,
  GenderIconPipe
];
const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-add-pet-page-step1",
  templateUrl: "./add-pet-page-step1.component.html",
  styleUrls: ["./add-pet-page-step1.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class AddPetPageStep1Component implements OnInit {
  formPetStep1!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formPetStep1 = this.fb.group({
      name: [null, [Validators.required]],
      gender: [null, []],
      dob: [new Date(), []],
    });
  }

  get petGenderEnum() {
    return EPetGender;
  }

  get addPetPageStep2() {
    return AddPetPageStep2Component
  }
}
