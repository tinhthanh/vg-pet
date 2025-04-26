import { NgTemplateOutlet } from "@angular/common";
import { Component, inject, OnInit, Type } from "@angular/core";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonNavLink,
  IonToolbar,
} from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { ROUTE } from "src/app/routers/route.const";
import { RoutersService } from "src/app/routers/routers.service";
import { SortPetListComponent } from "../sort-pet-list/sort-pet-list.component";
import { CustomizePetCardComponent } from "../customize-pet-card/customize-pet-card.component";
import { addIcons } from "ionicons";
import { ButtonConfigCardComponent } from "src/app/components/button-config-card/button-config-card.component";

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
  NgTemplateOutlet,
  ButtonConfigCardComponent
];
const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-config-page",
  templateUrl: "./config-page.component.html",
  styleUrls: ["./config-page.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class ConfigPageComponent implements OnInit {
  private router = inject(RoutersService);
  sortPetList = SortPetListComponent;
  customizePetCard = CustomizePetCardComponent;

  constructor() {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {}

  backToHome() {
    this.router.push([`${ROUTE.PET}/${ROUTE.HOME}/${ROUTE.TAB_1}`]);
  }
}
