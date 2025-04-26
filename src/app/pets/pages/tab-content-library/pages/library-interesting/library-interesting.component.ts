import { Component, OnInit, Type } from "@angular/core";
import {
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonNavLink,
  IonRow,
  IonToolbar,
} from "@ionic/angular/standalone";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { LIST_PET_LIB } from "src/app/mockup/libs.mock";
import { LibraryDetailComponent } from "../library-detail/library-detail.component";

const nzImports: Type<any> | ReadonlyArray<any> = [];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonGrid,
  IonRow,
  IonCol,
  IonNavLink
];
const coreImports: Type<any> | ReadonlyArray<any> = [BackButtonComponent];

const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-library-interesting",
  templateUrl: "./library-interesting.component.html",
  styleUrls: ["./library-interesting.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class LibraryInterestingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  get listPetLib() {
    return LIST_PET_LIB;
  }

  get libraryDetail() {
    return LibraryDetailComponent;
  }
}
