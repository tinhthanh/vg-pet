import { Component, Input, OnInit, Type } from "@angular/core";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonNav,
  IonToolbar,
} from "@ionic/angular/standalone";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { STATS_INFO_CONFIG_LIST } from "src/app/consts/stats-info.const";
import { IStatsInfo } from "src/app/interfaces/stats.interface";
import { ConfigurationStatsService } from "src/app/services/configuration-stats.service";
import { ReloadService } from "src/app/services/reload.service";
import { NzMessageService } from "ng-zorro-antd/message";

const nzImports: (Type<any> | ReadonlyArray<any>)[] = [];
const ionImports: (Type<any> | ReadonlyArray<any>)[] = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  TranslateModule,
  BackButtonComponent,
];
const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-stats-list-pet-card",
  templateUrl: "./stats-list-pet-card.component.html",
  styleUrls: ["./stats-list-pet-card.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class StatsListPetCardComponent implements OnInit {
  @Input() slotNumber: number = 0;

  constructor(
    private configurationStatsService: ConfigurationStatsService,
    private translateService: TranslateService,
    private nav: IonNav,
    private reloadService: ReloadService,
    private message: NzMessageService,
  ) {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {}

  get statsInfoConfigList(): IStatsInfo[] {
    return STATS_INFO_CONFIG_LIST;
  }


  selectStatsItem(statsItem: IStatsInfo) {
    this.configurationStatsService.setConfigurationStatsItem(statsItem, this.slotNumber);
    this.message.success(this.translateService.instant('MESSAGE.SUCCESS_UPDATE_STATS'));
    this.reloadService.triggerReload();
    this.navigateBack();
  }

  navigateBack() {
    this.nav.pop();
  }
}
