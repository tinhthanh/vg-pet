import { Component, OnInit } from "@angular/core";
import { IonBackButton, IonButton } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { arrowBackOutline } from "ionicons/icons";
import { ButtonIconCircleComponent } from "../button-icon-circle/button-icon-circle.component";

@Component({
  selector: "app-back-button",
  templateUrl: "./back-button.component.html",
  styleUrls: ["./back-button.component.scss"],
  standalone: true,
  imports: [IonButton, ButtonIconCircleComponent, IonBackButton],
})
export class BackButtonComponent implements OnInit {
  constructor() {
    addIcons({
      arrowBackOutline,
    });
  }

  ngOnInit() {}
}
