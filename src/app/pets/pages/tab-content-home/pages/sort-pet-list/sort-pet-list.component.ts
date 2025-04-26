import { DragDropModule, moveItemInArray } from "@angular/cdk/drag-drop";
import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  signal,
  Type,
} from "@angular/core";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar,
} from "@ionic/angular/standalone";
import { TranslateModule } from "@ngx-translate/core";
import { addIcons } from "ionicons";
import { ellipsisVerticalOutline } from "ionicons/icons";
import { debounceTime, Subject, tap } from "rxjs";
import { BackButtonComponent } from "src/app/components/back-button/back-button.component";
import { IPetDetail } from "src/app/interfaces/pet.interface";
import { PetAvatarUrlPipe } from "src/app/pipes/pet-avatar-url.pipe";
import { PetService } from "src/app/services/pet.service";
import { ReloadService } from "src/app/services/reload.service";

const nzImports: (Type<any> | ReadonlyArray<any>)[] = [];
const ionImports: (Type<any> | ReadonlyArray<any>)[] = [
  IonIcon,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [
  TranslateModule,
  BackButtonComponent,
  PetAvatarUrlPipe,
  DragDropModule,
];
const ionIcons: {
  [name: string]: string;
} = {
  ellipsisVerticalOutline,
};

@Component({
  selector: "app-sort-pet-list",
  templateUrl: "./sort-pet-list.component.html",
  styleUrls: ["./sort-pet-list.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class SortPetListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  petList = signal<Array<IPetDetail>>([]);

  constructor(
    private petService: PetService,
    private reloadService: ReloadService
  ) {
    addIcons({ ...ionIcons });
  }

  ngOnInit() {
    this.getList();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getList() {
    this.petService
      .getPetList()
      .pipe(
        debounceTime(800),
        tap((resp: any) => {
          if (resp && resp["data"]) {
            this.petList.set(resp["data"]);
          }
        })
      )
      .subscribe();
  }

  drop(event: any) {
    moveItemInArray(this.petList(), event.previousIndex, event.currentIndex);
    this.petService.setPetList(this.petList());
    this.getList();
    this.reloadService.triggerReload();
  }
}
