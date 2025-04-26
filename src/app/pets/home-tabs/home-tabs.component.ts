import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import {
  IonIcon,
  IonNav,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import {
  calendarOutline,
  libraryOutline,
  pawOutline,
  settingsOutline,
} from "ionicons/icons";
import { ROUTE } from "src/app/routers/route.const";
import { PetService } from "src/app/services/pet.service";

@Component({
  selector: "app-home-tabs",
  templateUrl: "./home-tabs.component.html",
  styleUrls: ["./home-tabs.component.scss"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonIcon, IonTabButton, IonTabBar, IonTabs],
  // providers: [IonNav],
})
export class HomeTabsComponent implements OnInit {
  selectedTab: string = this.route.TAB_1;

  constructor(private petService: PetService) {
    addIcons({
      pawOutline,
      calendarOutline,
      settingsOutline,
      libraryOutline,
    });
  }

  ngOnInit() {}

  get route() {
    return ROUTE;
  }

  onTabChange(event: any) {
    this.selectedTab = event.tab;
    this.petService.selectedTab = event.tab;
  }
}
