import { Component, Input } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import {
  IonButton,
  IonButtons,
  IonIcon,
  IonLabel,
  IonNavLink,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
} from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { addOutline, search, settingsOutline } from "ionicons/icons";
import { ESegmentType } from "src/app/enums/pet.enum";
import { ConfigPageComponent } from "src/app/pets/pages/tab-content-home/pages";
import { ROUTE, ROUTE_TAB_1 } from "src/app/routers/route.const";
import { RoutersService } from "src/app/routers/routers.service";
import { ButtonIconCircleComponent } from "../../button-icon-circle/button-icon-circle.component";
import { AddPetPageComponent } from "src/app/pets/pages/tab-content-home/pages/add-pet-page/add-pet-page.component";

@Component({
  selector: "app-home-header",
  templateUrl: "./home-header.component.html",
  styleUrls: ["./home-header.component.scss"],
  standalone: true,
  imports: [
    IonIcon,
    IonButton,
    IonToolbar,
    IonButtons,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonNavLink,
    ButtonIconCircleComponent,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomeHeaderComponent {
  @Input() formInput: FormGroup = new FormGroup({});

  configPage = ConfigPageComponent;
  addPetPage = AddPetPageComponent;

  constructor(private router: RoutersService) {
    addIcons({
      settingsOutline,
      search,
      addOutline,
    });
  }

  get isShowSearchControl(): FormControl {
    return this.formInput.get("isShowSearch") as FormControl;
  }

  get isShowSearch(): boolean {
    return this.isShowSearchControl.value as boolean;
  }

  get segmentTypeEnum() {
    return ESegmentType;
  }

  goToConfig() {
    this.router.push([`${ROUTE.PET}/${ROUTE.HOME}/${ROUTE_TAB_1.CONFIG}`]);
  }

  setShowSearch() {
    this.isShowSearchControl.patchValue(!this.isShowSearch);
  }
}
