import { NgTemplateOutlet } from "@angular/common";
import { Component, Input, OnInit, Type } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonNav,
  IonNavLink,
} from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { Subject, takeUntil } from "rxjs";
import { ScheduleCalendarComponent } from "src/app/components/tab-schedule/schedule-calendar/schedule-calendar.component";
import { ScheduleExpiredComponent } from "src/app/components/tab-schedule/schedule-expired/schedule-expired.component";
import { ScheduleHeaderComponent } from "src/app/components/tab-schedule/schedule-header/schedule-header.component";
import { ESegmentScheduleType } from "src/app/enums/pet.enum";
import { ISchedule } from "src/app/interfaces/schedule.interface";
import { PetService } from "src/app/services/pet.service";
import { PetSelectionPageComponent } from "./pages/pet-selection-page/pet-selection-page.component";
import { ReminderSelectionPageComponent } from "./pages/reminder-selection-page/reminder-selection-page.component";
import { ScheduleDetailComponent } from "./pages/schedule-detail/schedule-detail.component";

const nzImports: Type<any> | ReadonlyArray<any> = [];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonContent,
  IonHeader,
  IonButton,
  IonNavLink,
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  ScheduleHeaderComponent,
  ScheduleCalendarComponent,
  ScheduleExpiredComponent,
  TranslateModule,
  FormsModule,
  ReactiveFormsModule,
  NgTemplateOutlet,
];

const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-tab-content-schedule",
  templateUrl: "./tab-content-schedule.component.html",
  styleUrls: ["./tab-content-schedule.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class TabContentScheduleComponent implements OnInit {
  @Input() isPage: boolean = true;

  private destroy$ = new Subject<void>();

  formSchedule!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    private nav: IonNav
  ) {
    addIcons({ ...ionIcons });
    this.initialForm();
  }

  ngOnInit() {
    if (this.isPage) {
      this.petService.selectedTab
        .pipe(takeUntil(this.destroy$))
        .subscribe((val) => {
          this.nav.popToRoot();
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initialForm() {
    this.formSchedule = this.fb.group({
      header: this.fb.group({
        segmentType: [this.segmentScheduleEnum.CALENDAR, []],
      }),
    });
  }

  get segmentScheduleEnum() {
    return ESegmentScheduleType;
  }

  get headerControl(): FormGroup {
    return this.formSchedule.get("header") as FormGroup;
  }

  get segmentTypeControl(): FormControl {
    return this.headerControl.get("segmentType") as FormControl;
  }

  get petSelectionPageComponent() {
    return PetSelectionPageComponent;
  }

  targetPage = ReminderSelectionPageComponent;

  onSelectEvent(schedule: { data: ISchedule; key: string }) {
    this.nav.push(ScheduleDetailComponent, { schedule });
  }
}
