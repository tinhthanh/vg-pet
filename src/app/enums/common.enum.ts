export enum LanguageEnum {
  EN = "en",
  VI = "vi",
}

export enum DateFormatEnum {
  FIRST = "dd/mm/yyyy",
  SECOND = "dd-mm-yyyy",
}

export enum StartWeekEnum {
  MON = "1",
  SUN = "0",
}

export enum LengthUnitEnum {
  METER = "m",
  CENTIMETER = "cm",
}

export enum WeightUnitEnum {
  POUND = "ib",
  KILOGRAM = "kg",
}

export enum TemperatureUnitEnum {
  FAHRENHEIT = "fahrenheit",
  CELSIUS = "celsius",
}

export enum ScheduleEventTypeEnum {
  APPOINTMENTS = "APPOINTMENTS",
  BATHS = "BATHS",
  BIRTHDAYS = "BIRTHDAYS",
  EXERCISE = "EXERCISE",
  FLEAS = "FLEAS",
  FOOD = "FOOD",
  GROOMING = "GROOMING",
  MEDICATIONS = "MEDICATIONS",
  PHOTOS = "PHOTOS",
  SURGERY = "SURGERY",
  TREATMENTS = "TREATMENTS",
  VACCINES = "VACCINES",
  WALKING = "WALKING",
  WEIGHT = "WEIGHT",
  WORMS = "WORMS",
  OTHER = "OTHER",
}

export enum ScheduleTypeEnum {
  REMIND = "REMIND",
  REMINDED = "REMINDED",
  REMINDER = "REMINDER",
  DOCUMENT = "DOCUMENT",
}

export enum NumberOfRepetitionsEnum {
  ONCE = "ONCE",
  REPEAT = "REPEAT",
}

export enum FrequencyEnum {
  HOURS = "HOURS",
  DAYS = "DAYS",
  WEEKS = "WEEKS",
  MONTHS = "MONTHS",
  YEARS = "YEARS",
}

export enum RemindTypeEnum {
  AT_TIME = "AT_TIME",
  BEFORE_TIME = "BEFORE_TIME",
}


export enum ReminderListEnum {
  OWNER = "OWNER",
  TEMPORARY_CAREGIVER = "TEMPORARY_CAREGIVER",
  WALKER = "WALKER",
  SITTER = "SITTER",
  GROOMER = "GROOMER",
  FAMILY = "FAMILY",
  FRIEND = "FRIEND",
  VETERINARIAN = "VETERINARIAN",
  OTHER = "OTHER",
}

export enum ReminderLevelListEnum {
  CAN_VIEW = "CAN_VIEW",
  CAN_EDIT = "CAN_EDIT"
}