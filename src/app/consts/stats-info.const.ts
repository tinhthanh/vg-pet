import { values } from "lodash";
import {
  IIPetStatsInfoList,
  IStatsInfo,
  IStatsInfoList,
} from "../interfaces/stats.interface";
import { TabContentScheduleComponent } from "../pets/pages/tab-content-schedule/tab-content-schedule.component";
import { ViewPetLogPageComponent } from "../pets/pages/view-pet-detail-page/view-pet-log-page/view-pet-log-page.component";

export const STATS_INFO_CONFIG: IStatsInfoList = {
  CALENDAR: {
    icon: "assets/icons/ic-calendar.svg",
    alt: "Calendar",
    label: "SLOT_STATS.CALENDAR",
    unit: "",
    field: "calendar",
    navTo: TabContentScheduleComponent,
  },
  CLOCK: {
    icon: "assets/icons/ic-clock.svg",
    alt: "Clock",
    label: "SLOT_STATS.CLOCK",
    unit: "",
    field: "calendar",
  },
  LOG: {
    icon: "assets/icons/ic-note.svg",
    alt: "Log",
    label: "SLOT_STATS.LOG",
    unit: "",
    field: "log",
    navTo: ViewPetLogPageComponent
  },
  WEIGH: {
    icon: "assets/icons/ic-weigh.svg",
    alt: "Weigh",
    label: "SLOT_STATS.WEIGH",
    unit: "kg",
    field: "weigh",
  },
  VACCINATION: {
    icon: "assets/icons/ic-syringe.svg",
    alt: "Syringe",
    label: "SLOT_STATS.SYRINGE",
    unit: "",
    field: "vaccination",
  },
  CLIENT: {
    icon: "assets/icons/ic-client.svg",
    alt: "Client",
    label: "SLOT_STATS.CLIENT",
    unit: "",
    field: "owner",
  },
  PICTURE: {
    icon: "assets/icons/ic-camera.svg",
    alt: "Camera",
    label: "SLOT_STATS.CAMERA",
    unit: "",
    field: "picture",
  },
  DOCUMENT: {
    icon: "assets/icons/ic-document.svg",
    alt: "Document",
    label: "SLOT_STATS.DOCUMENT",
    unit: "",
    field: "picture",
  },
  CONTACT: {
    icon: "assets/icons/ic-contact.svg",
    alt: "Contact",
    label: "SLOT_STATS.CONTACT",
    unit: "",
    field: "owner",
  },
};

export const PET_INFO_CONFIG: IIPetStatsInfoList = {
  INFO: {
    icon: "assets/img/paw.png",
    alt: "info",
    label: "PET_INFO_STATS.INFO",
    desc: "PET_INFO_STATS.DESC_INFO",
    unit: "",
    field: "calendar",
  },
  CUSTOMIZE: {
    icon: "assets/icons/ic-pen.svg",
    alt: "customize",
    label: "PET_INFO_STATS.CUSTOMIZE",
    desc: "PET_INFO_STATS.DESC_CUSTOMIZE",
    unit: "",
    field: "calendar",
  },
  CONTACT: {
    icon: "assets/icons/ic-phone.svg",
    alt: "contact",
    label: "PET_INFO_STATS.CONTACT",
    desc: "PET_INFO_STATS.DESC_CONTACT",
    unit: "",
    field: "log",
  },
  INSURANCE: {
    icon: "assets/icons/ic-insurance.svg",
    alt: "insurance",
    label: "PET_INFO_STATS.INSURANCE",
    desc: "PET_INFO_STATS.DESC_INSURANCE",
    unit: "",
    field: "weigh",
  },
  DESIGNATION: {
    icon: "assets/icons/ic-dog.svg",
    alt: "designation",
    label: "PET_INFO_STATS.DESIGNATION",
    desc: "PET_INFO_STATS.DESC_DESIGNATION",
    unit: "",
    field: "vaccination",
  },
  CERTIFICATE: {
    icon: "assets/icons/ic-certificate.svg",
    alt: "certificate",
    label: "PET_INFO_STATS.CERTIFICATE",
    desc: "PET_INFO_STATS.DESC_CERTIFICATE",
    unit: "",
    field: "owner",
  },
  SOCIAL_NETWORK: {
    icon: "assets/icons/ic-network.svg",
    alt: "social_network",
    label: "PET_INFO_STATS.SOCIAL_NETWORK",
    desc: "PET_INFO_STATS.DESC_SOCIAL_NETWORK",
    unit: "",
    field: "picture",
  },
};

export const STATS_INFO_CONFIG_LIST = values(STATS_INFO_CONFIG);

export const PET_INFO_CONFIG_LIST = values(PET_INFO_CONFIG);

export const STATS_INFO_DEFAULT: IStatsInfo[] = [
  STATS_INFO_CONFIG["WEIGH"],
  STATS_INFO_CONFIG["VACCINATION"],
  STATS_INFO_CONFIG["PICTURE"],
  STATS_INFO_CONFIG["CLOCK"],
  STATS_INFO_CONFIG["LOG"],
  STATS_INFO_CONFIG["CLIENT"],
];

export const STATS_INFO_HABITS: IStatsInfo[] = [
  STATS_INFO_CONFIG["CALENDAR"],
  STATS_INFO_CONFIG["LOG"],
];

export const STATS_INFO_PROFILE: IStatsInfo[] = [
  STATS_INFO_CONFIG["WEIGH"],
  STATS_INFO_CONFIG["VACCINATION"],
  STATS_INFO_CONFIG["CLIENT"],
  STATS_INFO_CONFIG["LOG"],
];

export const STATS_INFO_FILE: IStatsInfo[] = [
  STATS_INFO_CONFIG["PICTURE"],
  STATS_INFO_CONFIG["DOCUMENT"],
];

export const STATS_INFO_VIEW_PET_DETAIL = {
  habits: STATS_INFO_HABITS,
  profile: STATS_INFO_PROFILE,
  file: STATS_INFO_FILE,
};
