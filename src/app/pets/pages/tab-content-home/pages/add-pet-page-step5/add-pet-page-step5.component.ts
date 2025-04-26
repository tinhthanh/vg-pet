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
  IonNav,
  IonNavLink,
  IonRow,
  IonToolbar,
} from "@ionic/angular/standalone";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";

const nzImports: (Type<any> | ReadonlyArray<any>)[] = [NzSwitchModule];
const ionImports: (Type<any> | ReadonlyArray<any>)[] = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonNavLink,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  BackButtonComponent,
  TranslateModule,
  NgTemplateOutlet,
  FormsModule,
];
const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-add-pet-page-step5",
  templateUrl: "./add-pet-page-step5.component.html",
  styleUrls: ["./add-pet-page-step5.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class AddPetPageStep5Component implements OnInit {
  constructor(
    private nav: IonNav,
    private messageService: NzMessageService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.messageService.success(
      this.translateService.instant("MESSAGE.SUCCESS_ADD_PET")
    )
    this.nav.popToRoot();
  }
}
