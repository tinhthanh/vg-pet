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
  IonNav,
  IonNavLink,
  IonRow,
} from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { STATS_INFO_VIEW_PET_DETAIL } from "src/app/consts/stats-info.const";
import { ViewPetDetailNavComponent } from "../view-pet-detail-nav/view-pet-detail-nav.component";
import { IPetDetail } from "src/app/interfaces/pet.interface";
import { ViewPetDetailInfoPageComponent } from "src/app/pets/pages/view-pet-detail-info-page/view-pet-detail-info-page.component";
import { CustomizePetCardComponent } from "src/app/pets/pages/tab-content-home/pages";

const ionImports: Type<any> | ReadonlyArray<any> = [
  IonGrid,
  IonRow,
  IonCol,
  IonNavLink,
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  CommonModule,
  TranslateModule,
  TranslateModule,
  FormsModule,
  ReactiveFormsModule,
  ViewPetDetailNavComponent,
];

const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-view-pet-detail-content",
  templateUrl: "./view-pet-detail-content.component.html",
  styleUrls: ["./view-pet-detail-content.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports],
  encapsulation: ViewEncapsulation.None,
})
export class ViewPetDetailContentComponent implements OnInit {
  @Input() petDetail: IPetDetail | null = null;

  constructor(private nav: IonNav) {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {}

  get tabContentScheduleComponent() {
    return CustomizePetCardComponent;
  }

  get statsInfoViewPetDetail() {
    return STATS_INFO_VIEW_PET_DETAIL;
  }

  onHabitClick(event: any) {
    console.log(event);
  }

  onClickViewPetDetailInfoPage() {
    this.nav.push(ViewPetDetailInfoPageComponent, {
      petDetail: this.petDetail,
    });
  }
}
