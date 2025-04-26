import { Component, Input, OnInit, Type } from "@angular/core";
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
import { ESegmentScheduleType } from "src/app/enums/pet.enum";
import { ButtonIconCircleComponent } from "../../button-icon-circle/button-icon-circle.component";
import { addOutline } from "ionicons/icons";
import { PetSelectionPageComponent } from "src/app/pets/pages/tab-content-schedule/pages/pet-selection-page/pet-selection-page.component";
import { BackButtonComponent } from "../../back-button/back-button.component";

const nzImports: Type<any> | ReadonlyArray<any> = [];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonIcon,
  IonButton,
  IonToolbar,
  IonButtons,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonNavLink,
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  ButtonIconCircleComponent,
  TranslateModule,
  FormsModule,
  ReactiveFormsModule,
  BackButtonComponent,
];

const ionIcons: {
  [name: string]: string;
} = {
  addOutline,
};

@Component({
  selector: "app-schedule-header",
  templateUrl: "./schedule-header.component.html",
  styleUrls: ["./schedule-header.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class ScheduleHeaderComponent implements OnInit {
  @Input() formInput: FormGroup = new FormGroup({});
  @Input() isPage: boolean = true;

  petSelectionPageComponent = PetSelectionPageComponent;

  constructor() {
    addIcons({
      ...ionIcons,
    });
  }

  ngOnInit() {}

  get isShowSearchControl(): FormControl {
    return this.formInput.get("isShowSearch") as FormControl;
  }

  get isShowSearch(): boolean {
    return this.isShowSearchControl.value as boolean;
  }

  get segmentTypeEnum() {
    return ESegmentScheduleType;
  }
}
