import { Component, OnInit, Type } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

const nzImports: (Type<any> | ReadonlyArray<any>)[] = [];
const ionImports: (Type<any> | ReadonlyArray<any>)[] = [];
const coreImports: (Type<any> | ReadonlyArray<any>)[] = [TranslateModule];

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
  standalone: true,
  imports: [...coreImports, ...ionImports, ...nzImports],
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
