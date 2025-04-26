import { NgTemplateOutlet } from "@angular/common";
import { Component, OnInit, Type, ViewEncapsulation } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { ButtonIconCircleComponent } from "src/app/components/button-icon-circle/button-icon-circle.component";

const nzImports: (Type<any> | ReadonlyArray<any>)[] = [];
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
} = {};

@Component({
  selector: "app-view-pet-log-page",
  templateUrl: "./view-pet-log-page.component.html",
  styleUrls: ["./view-pet-log-page.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
  encapsulation: ViewEncapsulation.None,
})
export class ViewPetLogPageComponent implements OnInit {
  constructor(private nav: IonNav) {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {}
}
