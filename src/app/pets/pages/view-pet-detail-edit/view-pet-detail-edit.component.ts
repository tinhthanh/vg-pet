import { Component, Input, OnInit, signal, Type } from "@angular/core";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonNavLink,
  IonRow,
  IonToolbar,
} from "@ionic/angular/standalone";
import { BackButtonComponent } from "../../../components/back-button/back-button.component";
import { TranslateModule } from "@ngx-translate/core";
import { NgTemplateOutlet } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { IPetDetail } from "src/app/interfaces/pet.interface";
import { GenderIconPipe } from "src/app/pipes/gender-icon.pipe";
import { EPetGender } from "src/app/enums/pet.enum";
import { PET_TYPE } from "src/app/consts/pet-type.const";

const nzImports: (Type<any> | ReadonlyArray<any>)[] = [
  NzInputModule,
  NzRadioModule,
  NzSelectModule,
  NzDatePickerModule,
];
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
];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  BackButtonComponent,
  TranslateModule,
  NgTemplateOutlet,
  FormsModule,
  GenderIconPipe,
];
const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-view-pet-detail-edit",
  templateUrl: "./view-pet-detail-edit.component.html",
  styleUrls: ["./view-pet-detail-edit.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class ViewPetDetailEditComponent implements OnInit {
  @Input() petDetail: IPetDetail | null = null;

  dob = signal<Date>(new Date());
  constructor() {}

  ngOnInit() {
    this.dob.set(this.petDetail ? new Date(this.petDetail.dob) : new Date());
  }

  get petGenderEnum() {
    return EPetGender;
  }

  get petTypeData() {
    return PET_TYPE[this.petDetail ? this.petDetail.petType : "CAT"];
  }

  onSubmit() {}
}
