import { ChangeDetectionStrategy, Component } from "@angular/core";
import { IonNav } from "@ionic/angular/standalone";
import { TabContentHomeComponent } from "../../pages/tab-content-home/tab-content-home.component";
@Component({
  selector: "app-tab1",
  template: `<ion-nav [root]="component"></ion-nav>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonNav],
})
export class Tab1Component {
  component = TabContentHomeComponent;
}
