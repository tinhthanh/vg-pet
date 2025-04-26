import { Component, OnInit, Type } from "@angular/core";
import { addIcons } from "ionicons";

const nzImports: Type<any> | ReadonlyArray<any> = [];
const ionImports: Type<any> | ReadonlyArray<any> = [];
const coreImports: Type<any> | ReadonlyArray<any> = [];
const ionIcons: {
  [name: string]: string;
} = {};

@Component({
  selector: "app-schedule-expired",
  templateUrl: "./schedule-expired.component.html",
  styleUrls: ["./schedule-expired.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class ScheduleExpiredComponent implements OnInit {
  constructor() {
    addIcons({
      ...ionIcons,
    });
  }

  ngOnInit() {}
}
