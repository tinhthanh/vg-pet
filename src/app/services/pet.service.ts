import { Injectable, signal } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { IPetDetail } from "../interfaces/pet.interface";
import { LIST_PET } from "../mockup/content-home.mock";
import { ROUTE_TAB } from "../routers/route.const";

@Injectable({
  providedIn: "root",
})
export class PetService {
  private petListSubject$ = new BehaviorSubject<any>({});
  private selectedTab$ = new BehaviorSubject<string>(ROUTE_TAB.TAB_1);
  pets = signal(LIST_PET);

  getPetList(): Observable<{ data: Array<IPetDetail> }> {
    return of({
      data: this.getPetListStorage(),
    });
  }

  setPetList(pets: Array<IPetDetail>) {
    this.setPetListStorage(pets);
  }

  get pets$(): Observable<Array<IPetDetail>> {
    return of(this.pets());
  }

  set selectedTab(tab: string) {
    this.selectedTab$.next(tab);
  }

  get selectedTab(): BehaviorSubject<string> {
    return this.selectedTab$;
  }

  initialPetList() {
    const petList = this.getPetListStorage();
    this.petListSubject$.next(this.pets());
    if (petList) {
      this.petListSubject$.next(petList);
    }
    this.setPetListStorage(this.petListSubject$.getValue(), true);
  }

  setPetListStorage(payload: any, initial: boolean = false) {
    try {
      localStorage.setItem("petList", JSON.stringify(payload));
      if (!initial) {
        this.initialPetList();
      }
    } catch (error) {
      console.error("Error saving pet list to local storage:", error);
    }
  }

  getPetListStorage(): any {
    try {
      const petList = localStorage.getItem("petList");
      const configurationParse = petList ? JSON.parse(petList) : null;
      return configurationParse ?? null;
    } catch (error) {
      console.error("Error reading pet list from local storage:", error);
      return null;
    }
  }
}
