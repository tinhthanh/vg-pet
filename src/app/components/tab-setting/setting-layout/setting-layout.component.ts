import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-setting-layout",
  templateUrl: "./setting-layout.component.html",
  styleUrls: ["./setting-layout.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export class SettingLayoutComponent implements OnInit {
  @Input() classMain: string = "";
  @Input() styles: string = "";

  constructor() {}

  ngOnInit() {}
}
