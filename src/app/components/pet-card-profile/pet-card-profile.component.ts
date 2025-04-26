import { NgClass, NgTemplateOutlet } from "@angular/common";
import { Component, EventEmitter, Input, Output, Type } from "@angular/core";
import { IonCol, IonGrid, IonIcon, IonNavLink, IonRow } from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { camera, cog, femaleOutline, maleOutline } from "ionicons/icons";
import { PET_DEFAULT_CONFIG } from "src/app/consts/common.const";
import { LazyImgDirective } from "src/app/directives/lazy-img.directive";
import { IPetDetail } from "src/app/interfaces/pet.interface";
import { ISchedule } from "src/app/interfaces/schedule.interface";
import { IStatsInfo } from "src/app/interfaces/stats.interface";
import { StatsListPetCardComponent } from "src/app/pets/pages/tab-content-home/pages";
import { DobDateDetailPipe } from "src/app/pipes/dob-date-detail.pipe";
import { GenderIconPipe } from "src/app/pipes/gender-icon.pipe";
import { PetAvatarUrlPipe } from "src/app/pipes/pet-avatar-url.pipe";

const nzImports: (Type<any> | ReadonlyArray<any>)[] = [];
const ionImports: (Type<any> | ReadonlyArray<any>)[] = [
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonNavLink,
];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  GenderIconPipe,
  PetAvatarUrlPipe,
  DobDateDetailPipe,
  LazyImgDirective,
  TranslateModule,
  NgTemplateOutlet,
  NgClass
];
const ionIcons: {
  [name: string]: string;
} = {
  camera,
  maleOutline,
  femaleOutline,
  cog,
};

@Component({
  selector: "app-pet-card-profile",
  templateUrl: "./pet-card-profile.component.html",
  styleUrls: ["./pet-card-profile.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class PetCardProfileComponent {
  @Input() petDetail: IPetDetail | null = null;
  @Input() statsInfo: IStatsInfo[] = [];
  @Input() isConfig: boolean = false;

  @Output() oClickCard = new EventEmitter<{ data: any }>();
  
  statsListPetCardComponent = StatsListPetCardComponent;

  constructor() {
    addIcons({
      ...ionIcons,
    });
  }

  get petDefaultConfig() {
    return PET_DEFAULT_CONFIG;
  }

  get statsInfoConfig(): IStatsInfo[] {
    return this.statsInfo;
  }

  onClickCard() {
    this.oClickCard.emit({
      data: this.petDetail || null
    })
  }
}
