import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { IonApp } from "@ionic/angular/standalone";
// import { HomePage } from './home/home.page';
// import { RoutersPage } from './routers/routers.page';
import { SwUpdate } from "@angular/service-worker";
import { RouterOutlet } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { ConfigurationService } from "./services/configuration.service";
import { ConfigurationStatsService } from "./services/configuration-stats.service";
import { PetService } from "./services/pet.service";
import { ScheduleService } from "./services/schedule.service";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  // selector: '[id=app]',
  selector: "app-root",
  template: `
    <ion-app
      style="max-width: 1024px; display: flex; justify-content: center; margin: 0 auto;"
    >
      <!-- <app-routers-page></app-routers-page> -->
      <router-outlet></router-outlet>
    </ion-app>
  `,
  standalone: true,
  imports: [IonApp, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private swUpdate: SwUpdate,
    private configurationService: ConfigurationService,
    private configurationStatsService: ConfigurationStatsService,
    private petService: PetService,
    private scheduleService: ScheduleService
  ) {}
  ngOnInit(): void {
    this.configurationService.initialConfiguration();
    this.configurationService.initialNotification();
    this.configurationStatsService.initialConfigurationStats();
    this.petService.initialPetList();
    this.scheduleService.initialScheduleStats();
    
    if (this.swUpdate.isEnabled) {
      // schedule check 60s
      // interval(60 * 1000).subscribe(() => this.swUpdate.checkForUpdate());
      this.swUpdate.versionUpdates
        .pipe(takeUntil(this.destroy$))
        .subscribe((evt) => {
          switch (evt.type) {
            case "VERSION_DETECTED":
              console.log(`Downloading new app version: ${evt.version.hash}`);
              break;
            case "VERSION_READY":
              console.log(`Current app version: ${evt.currentVersion.hash}`);
              console.log(
                `New app version ready for use: ${evt.latestVersion.hash}`
              );
              window.location.reload();
              break;
            case "VERSION_INSTALLATION_FAILED":
              window.location.reload();
              break;
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
