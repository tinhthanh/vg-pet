import { Component, OnInit, signal, Type } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonNav, IonRow, IonToolbar } from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject, takeUntil, tap } from 'rxjs';
import { BackButtonComponent } from 'src/app/components/back-button/back-button.component';
import { IPetDetail } from 'src/app/interfaces/pet.interface';
import { PetAvatarUrlPipe } from 'src/app/pipes/pet-avatar-url.pipe';
import { PetService } from 'src/app/services/pet.service';
import { ReloadService } from 'src/app/services/reload.service';
import { ScheduleTypeSelectionPageComponent } from '../schedule-type-selection-page/schedule-type-selection-page.component';
import { Schedule } from 'src/app/models/schedule.model';

const nzImports: Type<any> | ReadonlyArray<any> = [
  NzCheckboxModule,
];
const ionImports: Type<any> | ReadonlyArray<any> = [
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton
];
const coreImports: Type<any> | ReadonlyArray<any> = [
  TranslateModule,
  BackButtonComponent,
  TranslateModule,
  PetAvatarUrlPipe,
  FormsModule,
  ReactiveFormsModule
];

const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: 'app-pet-selection-page',
  templateUrl: './pet-selection-page.component.html',
  styleUrls: ['./pet-selection-page.component.scss'],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class PetSelectionPageComponent implements OnInit {
  petList = signal<Array<IPetDetail>>([]);
 
  formPetSelection!: FormGroup;

  private destroy$ = new Subject<void>();

  constructor(
    private petService: PetService,
    private reloadService: ReloadService,
    private fb: FormBuilder,
    private messageService: NzMessageService,
    private translateService: TranslateService,
    private nav: IonNav
  ) {
    addIcons({
      ...ionIcons,
    });
  }

  ngOnInit() {
    this.getPetList();
    this.reloadService.reload$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.getPetList();
    });
  }

  getPetList() {
    this.petService
      .getPetList()
      .pipe(
        tap((resp: any) => {
          if (resp && resp["data"]) {
            this.petList.set(resp["data"]);
            this.initialForm();
            this.petList().forEach((_pet: IPetDetail) => {
              this.petListControl.push(this.fb.control(false));
            });
          }
        })
      )
      .subscribe();
  }

  initialForm() {
    this.formPetSelection = this.fb.group({
      petList: this.fb.array([]),
    })
  }

  get petListControl(): FormArray {
    return this.formPetSelection.get("petList") as FormArray;
  }

  submit() {
    if(this.petListControl.value.every((item: boolean) => item === false)) {
      this.messageService.error(this.translateService.instant('MESSAGE.PLEASE_SELECT_PET'));
    } else {

      this.nav.push(ScheduleTypeSelectionPageComponent, {
        schedule: new Schedule({
          petList: this.petList(),
          checkedPets: this.petListControl.value
        })
      });
    }
  }
}
