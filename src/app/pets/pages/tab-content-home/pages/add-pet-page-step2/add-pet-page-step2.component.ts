import { NgTemplateOutlet } from "@angular/common";
import { Component, OnInit, Type } from "@angular/core";
import { IonButtons, IonContent, IonHeader, IonNavLink, IonToolbar } from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { PetImageDefault } from "src/app/consts/pet-image-default.const";
import { AddPetPageStep3Component } from "../add-pet-page-step3/add-pet-page-step3.component";
import { EPetType } from "src/app/enums/pet.enum";

const nzImports: (Type<any> | ReadonlyArray<any>)[] = [];
const ionImports: (Type<any> | ReadonlyArray<any>)[] = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonNavLink,
];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  BackButtonComponent,
  TranslateModule,
  NgTemplateOutlet
];
const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-add-pet-page-step2",
  templateUrl: "./add-pet-page-step2.component.html",
  styleUrls: ["./add-pet-page-step2.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class AddPetPageStep2Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  get petImageDefault() {
    return PetImageDefault;
  }

  get addPetPageStep3() {
    return AddPetPageStep3Component;
  }

  get petTypeEnum() {
    return EPetType;
  }
}
