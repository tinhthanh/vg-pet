import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Type, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonIcon, IonNavLink, IonToolbar } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import { camera, settingsOutline } from 'ionicons/icons';
import { IPetDetail } from 'src/app/interfaces/pet.interface';
import { ConfigPageComponent } from 'src/app/pets/pages/tab-content-home/pages';
import { PetAvatarUrlPipe } from 'src/app/pipes/pet-avatar-url.pipe';
import { BackButtonComponent } from '../../back-button/back-button.component';
import { ButtonIconCircleComponent } from '../../button-icon-circle/button-icon-circle.component';

const ionImports: Type<any> | ReadonlyArray<any> = [
  IonButton,
  IonIcon,
  IonToolbar,
  IonButtons,
  IonNavLink,

];
const coreImports: Type<any> | ReadonlyArray<any> = [
  CommonModule,
  TranslateModule,
  ButtonIconCircleComponent,
  TranslateModule,
  FormsModule,
  ReactiveFormsModule,
  BackButtonComponent,
  PetAvatarUrlPipe
];

const ionIcons: {
  [name: string]: string;
} = {
  settingsOutline,
  camera
};


@Component({
  selector: 'app-header-view-pet-detail',
  templateUrl: './header-view-pet-detail.component.html',
  styleUrls: ['./header-view-pet-detail.component.scss'],
  standalone: true,
  imports: [...coreImports, ...ionImports],
  encapsulation: ViewEncapsulation.None
})
export class HeaderViewPetDetailComponent implements OnInit {
  @Input() petDetail: IPetDetail | null = null;

  constructor() {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {
  }

  get configPage() { 
    return ConfigPageComponent
  };
  

}
