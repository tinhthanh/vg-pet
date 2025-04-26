import { Pipe, PipeTransform } from "@angular/core";
import { IPetDetail } from "../interfaces/pet.interface";
import { differenceInMonths, differenceInWeeks, parseISO } from "date-fns";

@Pipe({
  name: "dobDateDetail",
  standalone: true,
})
export class DobDateDetailPipe implements PipeTransform {
  transform(keyTranslate: string, petDetail: IPetDetail): any {
    if (!keyTranslate && !petDetail) return "";

    const today = new Date();
    const dob = parseISO(petDetail.dob);
    const months = differenceInMonths(today, dob);
    const weeks = differenceInWeeks(today, dob);

    return keyTranslate
      .replace("{{months}}", months.toString())
      .replace("{{weeks}}", weeks.toString());
  }
}
