import { ChangeDetectionStrategy, Component } from "@angular/core";
import { IonRouterOutlet } from "@ionic/angular/standalone";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonRouterOutlet],
})
export class HomeComponent {
  constructor() {}
}
