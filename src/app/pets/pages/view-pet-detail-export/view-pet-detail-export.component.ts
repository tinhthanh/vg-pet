import { Component, Input, OnInit, Type } from "@angular/core";
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
];
const ionIcons: {
  [name: string]: string;
} = {};


@Component({
  selector: 'app-view-pet-detail-export',
  templateUrl: './view-pet-detail-export.component.html',
  styleUrls: ['./view-pet-detail-export.component.scss'],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class ViewPetDetailExportComponent implements OnInit {
  @Input() petDetail: IPetDetail | null = null;
  constructor() { }

  ngOnInit() {
  }

}
