import { Pipe, PipeTransform } from "@angular/core";
import { PetImageDefault } from "../consts/pet-image-default.const";
import { EPetType } from "../enums/pet.enum";
import { IPetDetail } from "../interfaces/pet.interface";

@Pipe({
  name: "petAvatarUrl",
  standalone: true
})
export class PetAvatarUrlPipe implements PipeTransform {
  transform(pet: IPetDetail, args?: any): string {
    if (!pet) return "";
    if (pet.avatarUrl) return pet.avatarUrl;

    if (pet.petType === EPetType.CAT) {
      return PetImageDefault[EPetType.CAT];
    }
    if (pet.petType === EPetType.DOG) {
      return PetImageDefault[EPetType.DOG];
    }

    return "";
  }
}
