import { CommonModule } from "@angular/common";
import {
  Component,
  Input,
  OnInit,
  Type,
  ViewEncapsulation,
} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  IonCol,
  IonGrid,
  IonIcon,
  IonNav,
  IonRow,
} from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { informationCircleOutline } from "ionicons/icons";
import { PET_INFO_CONFIG_LIST } from "src/app/consts/stats-info.const";
import { IPetDetail } from "src/app/interfaces/pet.interface";
import { ViewPetInformationPageComponent } from "src/app/pets/pages/view-pet-detail-info-page/view-pet-information-page/view-pet-information-page.component";
import { ButtonIconCircleComponent } from "../../button-icon-circle/button-icon-circle.component";
import { ViewPetDetailNavComponent } from "../view-pet-detail-nav/view-pet-detail-nav.component";
import { ViewPetCustomizePageComponent } from "src/app/pets/pages/view-pet-detail-info-page/view-pet-customize-page/view-pet-customize-page.component";

const ionImports: Type<any> | ReadonlyArray<any> = [
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  CommonModule,
  TranslateModule,
  TranslateModule,
  FormsModule,
  ReactiveFormsModule,
  ViewPetDetailNavComponent,
  ButtonIconCircleComponent,
];

const ionIcons: {
  [name: string]: string;
} = {
  informationCircleOutline,
};

@Component({
  selector: "app-view-pet-detail-info-content",
  templateUrl: "./view-pet-detail-info-content.component.html",
  styleUrls: ["./view-pet-detail-info-content.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports],
  encapsulation: ViewEncapsulation.None,
})
export class ViewPetDetailInfoContentComponent implements OnInit {
  @Input() petDetail: IPetDetail | null = null;

  isShowDesc: boolean = false;

  constructor(private nav: IonNav) {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {}

  get petInfoConfigList() {
    return PET_INFO_CONFIG_LIST;
  }

  onToggleDesc() {
    this.isShowDesc = !this.isShowDesc;
  }

  onNav(index: number) {
    switch (index) {
      case 0:
        this.nav.push(ViewPetInformationPageComponent, {
          petDetail: this.petDetail,
        });
        break;
      case 1:
        this.nav.push(ViewPetCustomizePageComponent, {
          petDetail: this.petDetail,
        });
        break;
      default:
        break;
    }
  }
}
