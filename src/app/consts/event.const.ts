import { values } from "lodash";
import { ScheduleEventTypeEnum } from "../enums/common.enum";
import { ScheduleEventTypeConfig } from "../interfaces/common.interface";

export const EVENT_TYPE_CONFIG: Record<
  ScheduleEventTypeEnum,
  ScheduleEventTypeConfig
> = {
  APPOINTMENTS: {
    icon: "assets/icons/ic-appointments.svg",
    alt: "Appointments",
    label: "EVENT.APPOINTMENTS",
  },
  BATHS: {
    icon: "assets/icons/ic-baths.svg",
    alt: "Baths",
    label: "EVENT.BATHS",
  },
  BIRTHDAYS: {
    icon: "assets/icons/ic-birthdays.svg",
    alt: "Birthdays",
    label: "EVENT.BIRTHDAYS",
  },
  EXERCISE: {
    icon: "assets/icons/ic-exercise.svg",
    alt: "Exercise",
    label: "EVENT.EXERCISE",
  },
  FLEAS: {
    icon: "assets/icons/ic-fleas.svg",
    alt: "Fleas",
    label: "EVENT.FLEAS",
  },
  FOOD: {
    icon: "assets/icons/ic-food.svg",
    alt: "Food",
    label: "EVENT.FOOD",
  },
  GROOMING: {
    icon: "assets/icons/ic-grooming.svg",
    alt: "Grooming",
    label: "EVENT.GROOMING",
  },
  MEDICATIONS: {
    icon: "assets/icons/ic-medications.svg",
    alt: "Medications",
    label: "EVENT.MEDICATIONS",
  },
  PHOTOS: {
    icon: "assets/icons/ic-photos.svg",
    alt: "Photos",
    label: "EVENT.PHOTOS",
  },
  SURGERY: {
    icon: "assets/icons/ic-surgery.svg",
    alt: "Surgery",
    label: "EVENT.SURGERY",
  },
  TREATMENTS: {
    icon: "assets/icons/ic-treatments.svg",
    alt: "Treatments",
    label: "EVENT.TREATMENTS",
  },
  VACCINES: {
    icon: "assets/icons/ic-vaccines.svg",
    alt: "Vaccines",
    label: "EVENT.VACCINES",
  },
  WALKING: {
    icon: "assets/icons/ic-walking.svg",
    alt: "Walking",
    label: "EVENT.WALKING",
  },
  WEIGHT: {
    icon: "assets/icons/ic-weight.svg",
    alt: "Weight",
    label: "EVENT.WEIGHT",
  },
  WORMS: {
    icon: "assets/icons/ic-worms.svg",
    alt: "Worms",
    label: "EVENT.WORMS",
  },
  OTHER: {
    icon: "assets/icons/ic-other.svg",
    alt: "Other",
    label: "EVENT.OTHER",
  }
};

export const EVENT_TYPE_CONFIG_SCHEDULE: Record<
  ScheduleEventTypeEnum,
  ScheduleEventTypeConfig
> = {
  APPOINTMENTS: EVENT_TYPE_CONFIG.APPOINTMENTS,
  BATHS: EVENT_TYPE_CONFIG.BATHS,
  BIRTHDAYS: EVENT_TYPE_CONFIG.BIRTHDAYS,
  EXERCISE: EVENT_TYPE_CONFIG.EXERCISE,
  FLEAS: EVENT_TYPE_CONFIG.FLEAS,
  FOOD: EVENT_TYPE_CONFIG.FOOD,
  GROOMING: EVENT_TYPE_CONFIG.GROOMING,
  MEDICATIONS: EVENT_TYPE_CONFIG.MEDICATIONS,
  PHOTOS: EVENT_TYPE_CONFIG.PHOTOS,
  SURGERY: EVENT_TYPE_CONFIG.SURGERY,
  TREATMENTS: EVENT_TYPE_CONFIG.TREATMENTS,
  VACCINES: EVENT_TYPE_CONFIG.VACCINES,
  WALKING: EVENT_TYPE_CONFIG.WALKING,
  WEIGHT: EVENT_TYPE_CONFIG.WEIGHT,
  WORMS: EVENT_TYPE_CONFIG.WORMS,
  OTHER: EVENT_TYPE_CONFIG.OTHER,
};

export const EVENT_TYPE_CONFIG_LIST = values(EVENT_TYPE_CONFIG_SCHEDULE);

export const REMIND_TYPE_CONFIG_LIST = values({
  WEIGHT: EVENT_TYPE_CONFIG.WEIGHT,
  PHOTOS: EVENT_TYPE_CONFIG.PHOTOS,
  VACCINES: EVENT_TYPE_CONFIG.VACCINES,
  OTHER: EVENT_TYPE_CONFIG.OTHER,
});

export const WEIGHT_TYPE = {
  HUMAN_WEIGHT: "HUMAN_WEIGHT",
  PET_WEIGHT: "PET_WEIGHT",
};
