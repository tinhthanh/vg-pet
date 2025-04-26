import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Type } from '@angular/core';
import { IonContent, IonHeader } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderViewPetDetailComponent } from 'src/app/components/view-pet-detail/header-view-pet-detail/header-view-pet-detail.component';
import { ViewPetDetailInfoContentComponent } from 'src/app/components/view-pet-detail/view-pet-detail-info-content/view-pet-detail-info-content.component';
import { IPetDetail } from 'src/app/interfaces/pet.interface';

const nzImports: Type<any> | ReadonlyArray<any> = [];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonHeader,
  IonContent,
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  CommonModule,
  TranslateModule,
  HeaderViewPetDetailComponent,
  ViewPetDetailInfoContentComponent
];

const ionIcons: {
  [name: string]: string;
} = {};


@Component({
  selector: 'app-view-pet-detail-info-page',
  templateUrl: './view-pet-detail-info-page.component.html',
  styleUrls: ['./view-pet-detail-info-page.component.scss'],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class ViewPetDetailInfoPageComponent implements OnInit {
  @Input() petDetail: IPetDetail | null = null;

  constructor() { }

  ngOnInit() {
  }

}
