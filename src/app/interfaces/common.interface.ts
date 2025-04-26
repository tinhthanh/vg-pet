import { FrequencyEnum, NumberOfRepetitionsEnum } from "../enums/common.enum";

export interface ScheduleTypeConfig {
  code: string;
  icon: string;
  label: string;
}

export interface ScheduleEventTypeConfig {
  icon: string;
  alt: string;
  label: string;
}


export interface ScheduleBehaviorConfig {
  endDateTime?: Date | null
  frequencyNumber?: number
  frequencyUnit?: FrequencyEnum
  numberOfRepetitions?: NumberOfRepetitionsEnum
  startDateTime?: Date
}

export interface ReminderListConfig {
  icon: string;
  alt: string;
  label: string;
}