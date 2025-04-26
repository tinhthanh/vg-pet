import { NgTemplateOutlet } from "@angular/common";
import { Component, OnInit, Type } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonModal,
  IonNavLink,
  IonRow,
  IonToolbar,
} from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { chevronForwardOutline, settingsOutline } from "ionicons/icons";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { ButtonIconCircleComponent } from "src/app/components/button-icon-circle/button-icon-circle.component";
import { LIST_PET_LIB } from "src/app/mockup/libs.mock";
import { LibraryDetailComponent } from "./pages/library-detail/library-detail.component";
import { LibraryInterestingComponent } from "./pages/library-interesting/library-interesting.component";

const nzImports: Type<any> | ReadonlyArray<any> = [NzSwitchModule];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonContent,
  IonHeader,
  IonButton,
  IonNavLink,
  IonIcon,
  IonToolbar,
  IonButtons,
  IonNavLink,
  IonModal,
  IonGrid,
  IonRow,
  IonCol
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  TranslateModule,
  NgTemplateOutlet,
  ButtonIconCircleComponent,
  FormsModule
];

const ionIcons: {
  [name: string]: string;
} = {
  settingsOutline,
  chevronForwardOutline
};

@Component({
  selector: "app-tab-content-library",
  templateUrl: "./tab-content-library.component.html",
  styleUrls: ["./tab-content-library.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class TabContentLibraryComponent implements OnInit {
  constructor() {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {}

  get listPetLib() {
    return LIST_PET_LIB;
  }

  get libraryDetail() {
    return LibraryDetailComponent
  }

  get libraryInteresting() {
    return LibraryInterestingComponent
  }
}
