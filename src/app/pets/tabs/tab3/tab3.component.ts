import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular/standalone';
import { TabContentLibraryComponent } from '../../pages/tab-content-library/tab-content-library.component';

@Component({
  selector: 'app-tab3',
  template: `<ion-nav [root]="component"></ion-nav>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonNav],
})
export class Tab3Component  implements OnInit {
  component = TabContentLibraryComponent;
  constructor() { }

  ngOnInit() {}
}