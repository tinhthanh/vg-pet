export const ROUTE_TAB = {
  // tab 1
  TAB_1: "tab-1",

  // tab 2
  TAB_2: "tab-2",

  // tab 3
  TAB_3: "tab-3",

  // tab 4
  TAB_4: "tab-4",
};

export const ROUTE = {
  PET: "pet",
  HOME: "home",
  DETAILS: "details",

  ...ROUTE_TAB,
};

export const ROUTE_TAB_1 = {
  CONFIG: `${ROUTE.TAB_1}/config`,
};

export const ROUTE_TAB_4 = {
  PROFILE: `profile`,
  PASSWORD: `password`,
  SETTINGS: `settings`,
  NOTIFICATIONS: `notifications`,
  USERS: `users`,
  REGISTER: `register`,
  FEEDBACK: `feedback`,
  ABOUT: `about`,
  ACCOUNT_ACTIVITY: `account-activity`,
};

export const PATH_MATCH_REDIRECT_TO = `${ROUTE.PET}/${ROUTE.HOME}/${ROUTE.TAB_1}`;
