import { NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, Type } from '@angular/core';
import { IonButton, IonButtons, IonContent, IonHeader, IonNavLink, IonToolbar } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { BackButtonComponent } from 'src/app/components/back-button/back-button.component';
import { AddPetPageStep1Component } from '../add-pet-page-step1/add-pet-page-step1.component';

const nzImports: (Type<any> | ReadonlyArray<any>)[] = [];
const ionImports: (Type<any> | ReadonlyArray<any>)[] = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonNavLink,
  IonButton,
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
  selector: 'app-add-pet-page',
  templateUrl: './add-pet-page.component.html',
  styleUrls: ['./add-pet-page.component.scss'],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class AddPetPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get addPetPageStep1() {
    return AddPetPageStep1Component;
  }

}
