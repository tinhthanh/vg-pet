import { NgTemplateOutlet } from "@angular/common";
import { Component, Input, OnInit, Type } from "@angular/core";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonNavLink,
  IonRow,
  IonToolbar,
} from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSelectModule } from "ng-zorro-antd/select";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { PET_TYPE } from "src/app/consts/pet-type.const";
import { AddPetPageStep4Component } from "../add-pet-page-step4/add-pet-page-step4.component";

const nzImports: (Type<any> | ReadonlyArray<any>)[] = [
  NzSelectModule,
  NzInputModule,
];
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
];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  BackButtonComponent,
  TranslateModule,
  NgTemplateOutlet,
];
const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-add-pet-page-step3",
  templateUrl: "./add-pet-page-step3.component.html",
  styleUrls: ["./add-pet-page-step3.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class AddPetPageStep3Component implements OnInit {
  @Input() petType: string = "";

  constructor() {}

  ngOnInit() {}

  get petTypeData() {
    return PET_TYPE[this.petType];
  }

  get addPetPageStep4() {
    return AddPetPageStep4Component;
  }
}
