import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Type, ViewEncapsulation } from '@angular/core';
import { IonButton, IonContent, IonIcon, IonModal } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import { imagesOutline } from 'ionicons/icons';

const ionImports: Type<any> | ReadonlyArray<any> = [
  IonButton,
  IonModal,
  IonIcon,
  IonContent
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  CommonModule,
  TranslateModule,
];

const ionIcons: {
  [name: string]: string;
} = {
  imagesOutline
};


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
  standalone: true,
  imports: [...coreImports, ...ionImports],
  encapsulation: ViewEncapsulation.None
})
export class UploadFileComponent implements OnInit {
  @Input() label: string = "";
  @Input() styles: string = "";

  constructor() {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {
  }

}
