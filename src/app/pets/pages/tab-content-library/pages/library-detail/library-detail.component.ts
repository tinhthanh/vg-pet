import { Component, Input, OnInit, Type } from "@angular/core";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonToolbar,
} from "@ionic/angular/standalone";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";

const nzImports: Type<any> | ReadonlyArray<any> = [];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  BackButtonComponent
];

const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-library-detail",
  templateUrl: "./library-detail.component.html",
  styleUrls: ["./library-detail.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class LibraryDetailComponent implements OnInit {
  @Input() libDetail: any;
  constructor() {}

  ngOnInit() {}
}
