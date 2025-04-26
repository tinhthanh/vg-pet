import { RemindTypeEnum } from "../enums/common.enum"
import { ScheduleBehaviorConfig, ScheduleEventTypeConfig, ScheduleTypeConfig } from "./common.interface"
import { IPetDetail } from "./pet.interface"

export interface IScheduleList {
  [key: string]: ISchedule[]
}

export interface ISchedule {
  id: string,
  petInfo: IPetDetail,
  behavior: ScheduleBehaviorConfig,
  description: string,
  event: ScheduleEventTypeConfig | null,
  remindType: RemindTypeEnum,
  type: ScheduleTypeConfig | null,
}
