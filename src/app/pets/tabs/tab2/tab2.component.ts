import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular/standalone';
import { TabContentScheduleComponent } from '../../pages/tab-content-schedule/tab-content-schedule.component';

@Component({
  selector: 'app-tab2',
  template: `<ion-nav [root]="component"></ion-nav>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonNav],
})
export class Tab2Component  implements OnInit {
  component = TabContentScheduleComponent;
  constructor() { }

  ngOnInit() {}

}
