import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-button-icon-circle",
  templateUrl: "./button-icon-circle.component.html",
  styleUrls: ["./button-icon-circle.component.scss"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ButtonIconCircleComponent {
  @Input() styles: string = "";
}
