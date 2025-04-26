import { CommonModule } from "@angular/common";
import {
  Component,
  Input,
  OnInit,
  Type,
  ViewEncapsulation,
} from "@angular/core";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonNav,
  IonRow,
  IonToolbar,
} from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import {
  calendarOutline,
  createOutline,
  listOutline,
  trashOutline,
} from "ionicons/icons";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { ButtonIconCircleComponent } from "src/app/components/button-icon-circle/button-icon-circle.component";
import { ISchedule } from "src/app/interfaces/schedule.interface";

const nzImports: Type<any> | ReadonlyArray<any> = [];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  CommonModule,
  BackButtonComponent,
  TranslateModule,
  ButtonIconCircleComponent,
];

const ionIcons: {
  [name: string]: string;
} = {
  createOutline,
  trashOutline,
  listOutline,
  calendarOutline,
};

@Component({
  selector: "app-schedule-detail",
  templateUrl: "./schedule-detail.component.html",
  styleUrls: ["./schedule-detail.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
  encapsulation: ViewEncapsulation.None,
})
export class ScheduleDetailComponent implements OnInit {
  @Input() schedule!: { data: ISchedule; key: string };

  constructor(private nav: IonNav) {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {
    console.log(this.schedule);
  }

  get scheduleDetail(): ISchedule {
    return this.schedule.data as ISchedule;
  }
}
