import { NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, Type } from '@angular/core';
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonNavLink, IonRow, IonToolbar } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { BackButtonComponent } from 'src/app/components/back-button/back-button.component';
import { AddPetPageStep5Component } from '../add-pet-page-step5/add-pet-page-step5.component';

const nzImports: (Type<any> | ReadonlyArray<any>)[] = [ NzRadioModule ];
const ionImports: (Type<any> | ReadonlyArray<any>)[] = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonNavLink,
  IonGrid,
  IonRow,
  IonCol,
  IonButton
];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  BackButtonComponent,
  TranslateModule,
  NgTemplateOutlet
];
const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: 'app-add-pet-page-step4',
  templateUrl: './add-pet-page-step4.component.html',
  styleUrls: ['./add-pet-page-step4.component.scss'],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class AddPetPageStep4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get addPetPageStep5() {
    return AddPetPageStep5Component
  }

}
