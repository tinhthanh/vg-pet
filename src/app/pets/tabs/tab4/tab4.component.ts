import { ChangeDetectionStrategy, Component } from "@angular/core";
import { IonNav } from "@ionic/angular/standalone";
import { TabContentSettingComponent } from "../../pages/tab-content-setting/tab-content-setting.component";

@Component({
  selector: "app-tab4",
  template: `<ion-nav [root]="component"></ion-nav>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonNav],
})
export class Tab4Component {
  component = TabContentSettingComponent;
}
