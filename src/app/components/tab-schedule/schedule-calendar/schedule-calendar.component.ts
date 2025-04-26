import { CommonModule, DatePipe } from "@angular/common";
import {
  Component,
  computed,
  EventEmitter,
  OnInit,
  Output,
  signal,
  Type,
  ViewEncapsulation,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonCol, IonGrid, IonIcon, IonNav, IonRow } from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addMonths, subMonths } from "date-fns";
import { addIcons } from "ionicons";
import { chevronBack, chevronForward } from "ionicons/icons";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzBadgeModule } from "ng-zorro-antd/badge";
import { NzCalendarMode, NzCalendarModule } from "ng-zorro-antd/calendar";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { Subject, takeUntil, tap } from "rxjs";
import { IconCollapseComponent } from "src/app/icons/icon-collapse/icon-collapse.component";
import { IconExpandComponent } from "src/app/icons/icon-expand/icon-expand.component";
import { IPetDetail } from "src/app/interfaces/pet.interface";
import { PetService } from "src/app/services/pet.service";
import { ReloadService } from "src/app/services/reload.service";
import { ButtonIconCircleComponent } from "../../button-icon-circle/button-icon-circle.component";
import { DateCalendarDirective } from "src/app/directives/date-calendar.directive";
import { ISchedule, IScheduleList } from "src/app/interfaces/schedule.interface";
import { ScheduleService } from "src/app/services/schedule.service";

const nzImports: Type<any> | ReadonlyArray<any> = [
  NzCalendarModule,
  NzBadgeModule,
  NzToolTipModule,
  NzAvatarModule
];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonIcon,
  IonGrid,
  IonRow,
  IonCol
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  FormsModule,
  ButtonIconCircleComponent,
  DatePipe,
  TranslateModule,
  IconCollapseComponent,
  IconExpandComponent,
  CommonModule,
  DateCalendarDirective
];
const ionIcons: {
  [name: string]: string;
} = {
  chevronBack,
  chevronForward,
};

@Component({
  selector: "app-schedule-calendar",
  templateUrl: "./schedule-calendar.component.html",
  styleUrls: ["./schedule-calendar.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
  encapsulation: ViewEncapsulation.None,
})
export class ScheduleCalendarComponent implements OnInit {

  @Output() onSelectEvent = new EventEmitter<{ data: ISchedule, key: string }>();


  petList = signal<Array<IPetDetail>>([]);
  petListFiltered = computed(() => {
    return this.petList().slice(0, 2);
  });
  petListLengthDif = computed(() => {
    return this.petList().length - this.petListFiltered().length;
  });

  schedule = signal<IScheduleList>(this.scheduleService.getScheduleStorage());
  scheduleSelectedDate = signal<Date>(new Date());

  isCollapsed = signal<boolean>(true);
  mode: NzCalendarMode = "month";

  private destroy$ = new Subject<void>();

  constructor(
    private petService: PetService,
    private reloadService: ReloadService,
    private scheduleService: ScheduleService,
    private nav: IonNav
  ) {
    addIcons({
      ...ionIcons,
    });
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

  get scheduleSelected(): ISchedule[] {
    return this.schedule()[this.scheduleService.convertDateToString(this.scheduleSelectedDate())];
  }

  onPreviousMonth() {
    this.scheduleSelectedDate.set(subMonths(new Date(this.scheduleSelectedDate()), 1));
  }

  onNextMonth() {
    this.scheduleSelectedDate.set(addMonths(new Date(this.scheduleSelectedDate()), 1));
  }

  toggleCollapse() {
    this.isCollapsed.set(!this.isCollapsed());
  }

  
  onSelectScheduleItem(scheduleItem: ISchedule) {
    const key = this.scheduleService.convertDateToString(this.scheduleSelectedDate());
    this.onSelectEvent.emit({ data: scheduleItem, key })
  }
}
