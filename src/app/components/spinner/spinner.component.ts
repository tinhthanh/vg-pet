import { AsyncPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { IonSpinner } from "@ionic/angular/standalone";
import { Observable } from "rxjs";
import { SpinnerService } from "src/app/services/spinner.service";

@Component({
  selector: "app-spinner",
  templateUrl: "spinner.component.html",
  standalone: true,
  imports: [IonSpinner, AsyncPipe],
})
export class SpinnerComponent implements OnInit {
  constructor(private spinnerService: SpinnerService) {}

  ngOnInit() {}

  get isLoading(): Observable<boolean> {
    return this.spinnerService.isLoading$;
  }
}
