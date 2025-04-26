import { Component, OnDestroy, OnInit, Type } from "@angular/core";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonToolbar,
} from "@ionic/angular/standalone";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { NzMessageService } from "ng-zorro-antd/message";
import { debounceTime, Subject, takeUntil, tap } from "rxjs";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { PetCardProfileComponent } from "src/app/components/pet-card-profile/pet-card-profile.component";
import { IStatsInfo } from "src/app/interfaces/stats.interface";
import { ConfigurationService } from "src/app/services/configuration.service";
import { ReloadService } from "src/app/services/reload.service";

const nzImports: (Type<any> | ReadonlyArray<any>)[] = [];
const ionImports: (Type<any> | ReadonlyArray<any>)[] = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonContent,
];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  TranslateModule,
  BackButtonComponent,
  PetCardProfileComponent,
];
const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-customize-pet-card",
  templateUrl: "./customize-pet-card.component.html",
  styleUrls: ["./customize-pet-card.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class CustomizePetCardComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  statsInfoConfig: Array<IStatsInfo> = [];

  constructor(
    private configurationService: ConfigurationService,
    private reloadService: ReloadService,
    private translateService: TranslateService,
    private message: NzMessageService
  ) {
    addIcons({ ...ionIcons });
    this.getConfig();
  }

  ngOnInit() {
    this.reloadService.reload$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.getConfig();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getConfig() {
    this.configurationService
      .getStatsInfoConfig()
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(800),
        tap((resp) => {
          if (resp && resp["data"]) {
            this.statsInfoConfig = resp["data"];
          }
        })
      )
      .subscribe();
  }

  setDefault() {
    this.configurationService.setStatsInfoConfigDefault();
    this.message.success(
      this.translateService.instant("MESSAGE.SUCCESS_UPDATE_STATS_DEFAULT")
    );
    this.reloadService.triggerReload();
  }
}
