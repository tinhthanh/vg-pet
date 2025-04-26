import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Type } from '@angular/core';
import { IonContent, IonHeader } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderViewPetDetailComponent } from 'src/app/components/view-pet-detail/header-view-pet-detail/header-view-pet-detail.component';
import { ViewPetDetailContentComponent } from 'src/app/components/view-pet-detail/view-pet-detail-content/view-pet-detail-content.component';

const nzImports: Type<any> | ReadonlyArray<any> = [];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonHeader,
  IonContent,
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  CommonModule,
  TranslateModule,
  HeaderViewPetDetailComponent,
  ViewPetDetailContentComponent
];

const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: 'app-view-pet-detail-page',
  templateUrl: './view-pet-detail-page.component.html',
  styleUrls: ['./view-pet-detail-page.component.scss'],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class ViewPetDetailPageComponent implements OnInit {
  @Input() petDetail: any | null = null;

  constructor() { }

  ngOnInit() {
  }

}
