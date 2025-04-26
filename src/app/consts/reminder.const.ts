import { ReminderLevelListEnum, ReminderListEnum } from "../enums/common.enum";
import { ReminderListConfig } from "../interfaces/common.interface";

export const REMINDER_LIST: Record<
  ReminderListEnum,
  ReminderListConfig
> = {
  OWNER: {
    icon: "assets/icons/ic-crown.svg",
    alt: "owner",
    label: "REMINDER.OWNER",
  },
  TEMPORARY_CAREGIVER: {
    icon: "assets/icons/ic-heart.svg",
    alt: "temporary_caregiver",
    label: "REMINDER.TEMPORARY_CAREGIVER",
  },
  WALKER: {
    icon: "assets/icons/ic-walking.svg",
    alt: "walker",
    label: "REMINDER.WALKER",
  },
  SITTER: {
    icon: "assets/icons/ic-home.svg",
    alt: "sitter",
    label: "REMINDER.SITTER",
  },
  GROOMER: {
    icon: "assets/icons/ic-grooming.svg",
    alt: "groomer",
    label: "REMINDER.GROOMER",
  },
  FAMILY: {
    icon: "assets/icons/ic-family.svg",
    alt: "family",
    label: "REMINDER.FAMILY",
  },
  FRIEND: {
    icon: "assets/icons/ic-hand-clap.svg",
    alt: "friend",
    label: "REMINDER.FRIEND",
  },
  VETERINARIAN: {
    icon: "assets/icons/ic-doctor.svg",
    alt: "veterinarian",
    label: "REMINDER.VETERINARIAN",
  },
  OTHER: {
    icon: "assets/icons/ic-other.svg",
    alt: "other",
    label: "REMINDER.OTHER",
  }
}

export const REMINDER_LEVEL_LIST: Record<
  ReminderLevelListEnum,
  ReminderListConfig
> = {
  CAN_VIEW: {
    icon: "assets/icons/ic-eye.svg",
    alt: "eye",
    label: "BTN.CAN_VIEW",
  },
  CAN_EDIT: {
    icon: "assets/icons/ic-writing.svg",
    alt: "writing",
    label: "BTN.CAN_EDIT",
  }
}