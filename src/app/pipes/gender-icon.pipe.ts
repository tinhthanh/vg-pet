import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "genderIcon",
  standalone: true
})
export class GenderIconPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    if (!value) return "";

    const genderIcons: { [key: string]: string } = {
      MALE: "&#9794;",
      FEMALE: "&#9792;",
    };

    const valueUp = value.toUpperCase();
    return genderIcons[valueUp] || value;
  }
}
