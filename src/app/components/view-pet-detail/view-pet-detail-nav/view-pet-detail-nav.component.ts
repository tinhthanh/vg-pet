import { CommonModule } from "@angular/common";
import {
  Component,
  Input,
  OnInit,
  signal,
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
import {
  addOutline,
  eyedropOutline,
  eyeOffOutline,
  logOutOutline,
} from "ionicons/icons";
import { ButtonIconCircleComponent } from "../../button-icon-circle/button-icon-circle.component";
import { ScheduleTypeSelectionPageComponent } from "src/app/pets/pages/tab-content-schedule/pages/schedule-type-selection-page/schedule-type-selection-page.component";
import { Schedule } from "src/app/models/schedule.model";
import { IPetDetail } from "src/app/interfaces/pet.interface";
import { Subject, takeUntil, tap } from "rxjs";
import { PetService } from "src/app/services/pet.service";
import { ReloadService } from "src/app/services/reload.service";
import { ViewPetDetailEditComponent } from "../../../pets/pages/view-pet-detail-edit/view-pet-detail-edit.component";
import { ViewPetDetailSaveComponent } from "../../../pets/pages/view-pet-detail-save/view-pet-detail-save.component";
import { ViewPetDetailExportComponent } from "../../../pets/pages/view-pet-detail-export/view-pet-detail-export.component";

const ionImports: Type<any> | ReadonlyArray<any> = [
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  CommonModule,
  TranslateModule,
  TranslateModule,
  FormsModule,
  ReactiveFormsModule,
  ButtonIconCircleComponent,
];

const ionIcons: {
  [name: string]: string;
} = {
  addOutline,
  eyeOffOutline,
  eyedropOutline,
  logOutOutline,
};

@Component({
  selector: "app-view-pet-detail-nav",
  templateUrl: "./view-pet-detail-nav.component.html",
  styleUrls: ["./view-pet-detail-nav.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports],
  encapsulation: ViewEncapsulation.None,
})
export class ViewPetDetailNavComponent implements OnInit {
  @Input() petDetail: IPetDetail | null = null;
  petList = signal<Array<IPetDetail>>([]);

  private destroy$ = new Subject<void>();
  constructor(
    private nav: IonNav,
    private petService: PetService,
    private reloadService: ReloadService
  ) {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {
    this.getPetList();
    this.reloadService.reload$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.getPetList();
    });
  }

  getPetList() {
    this.petService
      .getPetList()
      .pipe(
        tap((resp: any) => {
          if (resp && resp["data"]) {
            this.petList.set(resp["data"]);
          }
        })
      )
      .subscribe();
  }

  onNav(num: number) {
    switch (num) {
      case 1:
        this.nav.push(ScheduleTypeSelectionPageComponent, {
          schedule: new Schedule({
            petList: this.petList(),
            checkedPets: this.petList().map((pet) => {
              if (!this.petDetail) return false;
              return (
                pet.name === this.petDetail.name &&
                pet.gender === this.petDetail.gender &&
                pet.dob === this.petDetail.dob &&
                pet.owner === this.petDetail.owner
              );
            }),
          }),
        });
        break;
      case 2:
        this.nav.push(ViewPetDetailEditComponent, {
          petDetail: this.petDetail,
        });
        break;
      case 3:
        this.nav.push(ViewPetDetailSaveComponent, {
          petDetail: this.petDetail,
        });
        break;
      case 4:
        this.nav.push(ViewPetDetailExportComponent, {
          petDetail: this.petDetail,
        });
        break;
      default:
        break;
    }
  }
}
