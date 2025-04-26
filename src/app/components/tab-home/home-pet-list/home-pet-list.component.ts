import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IonCol, IonGrid, IonRow } from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { IPetDetail } from "src/app/interfaces/pet.interface";
import { IStatsInfo } from "src/app/interfaces/stats.interface";
import { PetCardProfileComponent } from "../../pet-card-profile/pet-card-profile.component";

@Component({
  selector: "app-home-pet-list",
  templateUrl: "./home-pet-list.component.html",
  styleUrls: ["./home-pet-list.component.scss"],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, PetCardProfileComponent, TranslateModule],
})
export class HomePetListComponent implements OnInit {
  @Input() petList: Array<IPetDetail> = [];
  @Input() statsInfo: Array<IStatsInfo> = [];

  @Output() oClickCard = new EventEmitter<{ data: any }>();
  
  constructor() {}

  ngOnInit() {}

  onClickCard(event: any) {
    this.oClickCard.emit(event)
  } 
}
