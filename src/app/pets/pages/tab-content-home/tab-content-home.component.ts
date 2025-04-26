import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import {
  IonContent,
  IonHeader,
  IonNav,
  IonSearchbar,
} from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { combineLatest, debounceTime, Subject, takeUntil, tap } from "rxjs";
import { SLIDE_IN_OUT_ANIMATION } from "src/app/consts/animation-slide.const";
import { ESegmentType } from "src/app/enums/pet.enum";
import { IPetDetail } from "src/app/interfaces/pet.interface";
import { PetService } from "src/app/services/pet.service";
import { IStatsInfo } from "src/app/interfaces/stats.interface";
import { ConfigurationService } from "src/app/services/configuration.service";
import { HomeHeaderComponent } from "src/app/components/tab-home/home-header/home-header.component";
import { HomePetListComponent } from "src/app/components/tab-home/home-pet-list/home-pet-list.component";
import { ReloadService } from "src/app/services/reload.service";
import { ViewPetDetailPageComponent } from "../view-pet-detail-page/view-pet-detail-page.component";

@Component({
  selector: "app-tab-content-home",
  templateUrl: "./tab-content-home.component.html",
  styleUrls: ["./tab-content-home.component.scss"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonContent,
    IonHeader,
    IonSearchbar,
    HomeHeaderComponent,
    HomePetListComponent,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  animations: [...SLIDE_IN_OUT_ANIMATION],
})
export class TabContentHomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  formControlHome!: FormGroup;
  petList = signal<Array<IPetDetail>>([]);
  statsInfo = signal<Array<IStatsInfo>>([]);

  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    private configurationService: ConfigurationService,
    private nav: IonNav,
    private reloadService: ReloadService
  ) {
    this.initialForm();
    this.getList();
  }

  ngOnInit() {
    this.petService.selectedTab
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => {
        this.nav.popToRoot();
      });

    this.reloadService.reload$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.getList();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initialForm() {
    this.formControlHome = this.fb.group({
      header: this.fb.group({
        isShowSearch: [false, []],
        segmentType: [this.segmentTypeEnum.DISPLAY, []],
      }),
      search: [null, []],
    });
  }

  get segmentTypeEnum() {
    return ESegmentType;
  }

  get headerControl(): FormGroup {
    return this.formControlHome.get("header") as FormGroup;
  }

  get isShowSearchControl(): FormControl {
    return this.headerControl.get("isShowSearch") as FormControl;
  }

  get isShowSearch(): boolean {
    return this.isShowSearchControl.value as boolean;
  }

  get segmentTypeControl(): FormControl {
    return this.headerControl.get("segmentType") as FormControl;
  }

  get searchControl(): FormControl {
    return this.formControlHome.get("search") as FormControl;
  }

  get petListSearch(): Array<IPetDetail> {
    if (!this.searchControl.value) return this.petList();
    return this.petList().filter((pet: IPetDetail) =>
      pet.name.toUpperCase().includes(this.searchControl.value.toUpperCase())
    );
  }

  getList() {
    combineLatest([
      this.petService.getPetList(),
      this.configurationService.getStatsInfoConfig(),
    ])
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(800),
        tap(([respList, respStats]) => {
          if (respList["data"]) {
            this.petList.set(respList["data"]);
          }
          if (respStats["data"]) {
            this.statsInfo.set(respStats["data"]);
          }
        })
      )
      .subscribe();
  }

  onClickCard(event: any) {
    this.nav.push(ViewPetDetailPageComponent, {
      petDetail: event.data || null
    })
  }
}
