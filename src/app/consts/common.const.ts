import {
  DateFormatEnum,
  FrequencyEnum,
  LanguageEnum,
  LengthUnitEnum,
  ScheduleTypeEnum,
  StartWeekEnum,
  TemperatureUnitEnum,
  WeightUnitEnum,
} from "../enums/common.enum";
import { EPetGender, EPetType } from "../enums/pet.enum";
import { EUserGender, EUserRelation } from "../enums/user.enum";
import { ScheduleTypeConfig } from "../interfaces/common.interface";
import { FORMAT_DATE } from "./format-date.const";

export const USER_GENDER = {
  MALE: EUserGender.MALE,
  FEMALE: EUserGender.FEMALE,
  OTHER: EUserGender.OTHER,
};

export const USER_RELATION = {
  OWNER: EUserRelation.OWNER,
  BREEDER: EUserRelation.BREEDER,
  FOSTER: EUserRelation.FOSTER,
  CAREGIVER: EUserRelation.CAREGIVER,
  TRAINER: EUserRelation.TRAINER,
  VETERINARIAN: EUserRelation.VETERINARIAN,
  OTHER: EUserRelation.OTHER,
};

export const LANGUAGES = {
  EN: LanguageEnum.EN,
  VI: LanguageEnum.VI,
};

export const START_WEEK = {
  SUN: StartWeekEnum.SUN,
  MON: StartWeekEnum.MON,
};

export const DATE_FORMAT_DATA = {
  FIRST: {
    value: DateFormatEnum.FIRST,
    format: FORMAT_DATE.FIRST,
  },
  SECOND: {
    value: DateFormatEnum.SECOND,
    format: FORMAT_DATE.SECOND,
  },
};

export const LENGTH_UNIT = {
  METER: LengthUnitEnum.METER,
  CENTIMETER: LengthUnitEnum.CENTIMETER,
};

export const WEIGHT_UNIT = {
  POUND: WeightUnitEnum.POUND,
  KILOGRAM: WeightUnitEnum.KILOGRAM,
};

export const TEMPERATURE_UNIT = {
  FAHRENHEIT: TemperatureUnitEnum.FAHRENHEIT,
  CELSIUS: TemperatureUnitEnum.CELSIUS,
};

export const CONFIGURATION_DEFAULT = {
  theme: {
    isThemeDevice: false,
    isDarkTheme: false,
  },
  language: LanguageEnum.VI,
  dateFormat: {
    format: null,
    startWeek: StartWeekEnum.MON,
  },
  measurement: {
    lengthUnit: LengthUnitEnum.METER,
    weightUnit: WeightUnitEnum.KILOGRAM,
    temperatureUnit: TemperatureUnitEnum.FAHRENHEIT,
  },
};

export const NOTIFICATION_DEFAULT = {
  learningConfig: true,
  appUpdate: false,
  vibrateNotification: true,
};

export const PET_DEFAULT_CONFIG = {
  petType: EPetType.DOG,
  avatarUrl: "",
  avatarAlt: "Dog Config Pet Card",
  name: "CUSTOMIZE_PET_CARD.NAME_PET_TEMPLATE",
  dob: "CUSTOMIZE_PET_CARD.DATE_PET_TEMPLATE",
  gender: EPetGender.FEMALE,
  weigh: 10.0,
  vaccination: 1,
  picture: 10,
  calendar: 2,
  log: 20,
  owner: 1,
};

export const SCHEDULE_TYPE_CONFIG: Record<
  ScheduleTypeEnum,
  ScheduleTypeConfig
> = {
  [ScheduleTypeEnum.REMIND]: {
    code: ScheduleTypeEnum.REMIND,
    icon: "assets/icons/ic-appointments.svg",
    label: "SCHEDULE.ADD_REMIND",
  },
  [ScheduleTypeEnum.REMINDED]: {
    code: ScheduleTypeEnum.REMINDED,
    icon: "assets/icons/ic-note.svg",
    label: "SCHEDULE.ADD_REMINDED",
  },
  [ScheduleTypeEnum.REMINDER]: {
    code: ScheduleTypeEnum.REMINDER,
    icon: "assets/icons/ic-client.svg",
    label: "SCHEDULE.ADD_REMINDER",
  },
  [ScheduleTypeEnum.DOCUMENT]: {
    code: ScheduleTypeEnum.DOCUMENT,
    icon: "assets/icons/ic-document.svg",
    label: "SCHEDULE.ADD_DOCUMENT",
  },
};

export const FrequencyOptions = [
  FrequencyEnum.HOURS,
  FrequencyEnum.DAYS,
  FrequencyEnum.WEEKS,
  FrequencyEnum.MONTHS,
  FrequencyEnum.YEARS,
];
