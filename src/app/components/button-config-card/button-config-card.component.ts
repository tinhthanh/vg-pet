import { Component, Input, OnInit } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-button-config-card",
  template: ` <div class="button-config">
    <div class="button-config-icon">
      <img [src]="icon" [alt]="title || ''" />
    </div>

    <div class="button-config-text">
      {{ title | translate }}
    </div>
  </div>`,
  standalone: true,
  imports: [TranslateModule],
  styles: `.button-config {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 24px;
    border-radius: 12px;
    background-color: var(--ion-background-secondary);
    margin-top: 20px;
    width: 340px;
    height: 104px;

    &-icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: var(--yellow-color);
      border: 1px solid #252525;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;

      img {
        width: 32px;
        height: 32px;
      }
    }

    &-text {
      font-size: 1.1rem;
      font-weight: 700;
      text-align: center;
      word-break: break-word;
      width: calc(100% - (60px + 20px));
      color: var(--ion-text-secondary);
    }
  }`,
})
export class ButtonConfigCardComponent {
  @Input() icon: string = "";
  @Input() title: string = "";
}
