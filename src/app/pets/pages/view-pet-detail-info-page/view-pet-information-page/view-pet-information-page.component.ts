import { NgTemplateOutlet } from "@angular/common";
import { Component, Input, OnInit, Type, ViewEncapsulation } from "@angular/core";
import { FormsModule } from "@angular/forms";
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
import { copyOutline } from "ionicons/icons";
import { add } from "lodash";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { ButtonIconCircleComponent } from "src/app/components/button-icon-circle/button-icon-circle.component";
import { PET_INFO_CONFIG } from "src/app/consts/stats-info.const";
import { IPetDetail } from "src/app/interfaces/pet.interface";
import { ViewPetDetailEditComponent } from "../../view-pet-detail-edit/view-pet-detail-edit.component";

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
  IonIcon
];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  BackButtonComponent,
  TranslateModule,
  NgTemplateOutlet,
  FormsModule,
  ButtonIconCircleComponent
];
const ionIcons: {
  [name: string]: string;
} = {
  copyOutline
};

@Component({
  selector: "app-view-pet-information-page",
  templateUrl: "./view-pet-information-page.component.html",
  styleUrls: ["./view-pet-information-page.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
  encapsulation: ViewEncapsulation.None,
})
export class ViewPetInformationPageComponent implements OnInit {
  @Input() petDetail: IPetDetail | null = null;

  constructor(private nav: IonNav) {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {
    console.log(this.petDetail);
  }

  get petInfoConfig() {
    return PET_INFO_CONFIG["INFO"];
  }

  onEdit() {
    this.nav.push(ViewPetDetailEditComponent, {
      petDetail: this.petDetail,
    });
  }
}
