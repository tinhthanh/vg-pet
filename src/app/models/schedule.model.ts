import {
  ScheduleBehaviorConfig,
  ScheduleEventTypeConfig,
  ScheduleTypeConfig,
} from "../interfaces/common.interface";
import { IPetDetail } from "../interfaces/pet.interface";

export class Schedule {
  checkedPets: boolean[] = [];
  petList: IPetDetail[] = [];
  scheduleType: ScheduleTypeConfig | null = null;
  scheduleEvent: ScheduleEventTypeConfig | null = null;
  scheduleDesc: string = "";
  scheduleBehavior: ScheduleBehaviorConfig = {};
  scheduleRemind: any = {};

  constructor(data?: any) {
    if (data) {
      this.checkedPets = data.checkedPets ? data.checkedPets : [];
      this.petList = data.petList ? data.petList : [];
      this.scheduleType = data.scheduleType ? data.scheduleType : null;
      this.scheduleEvent = data.scheduleEvent ? data.scheduleEvent : null;
      this.scheduleDesc = data.scheduleDesc ? data.scheduleDesc : "";
      this.scheduleBehavior = data.scheduleBehavior
        ? data.scheduleBehavior
        : {};
      this.scheduleRemind = data.scheduleRemind ? data.scheduleRemind : {};
    }
  }
}
