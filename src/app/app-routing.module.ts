import { Routes } from "@angular/router";
import { HomeTabsComponent } from "./pets/home-tabs/home-tabs.component";
import { HomeComponent } from "./pets/home/home.component";
import { PetDetailsComponent } from "./pets/tabs/pet-details/pet-details.component";
import {
  PATH_MATCH_REDIRECT_TO,
  ROUTE,
  ROUTE_TAB_4,
} from "./routers/route.const";
import { ProfileComponent } from "./pets/pages/tab-content-setting/pages/profile/profile.component";
import { PasswordComponent } from "./pets/pages/tab-content-setting/pages/password/password.component";
import { SettingComponent } from "./pets/pages/tab-content-setting/pages/setting/setting.component";
import { NotificationsComponent } from "./pets/pages/tab-content-setting/pages/notifications/notifications.component";
import { UsersComponent } from "./pets/pages/tab-content-setting/pages/users/users.component";
import { RegisterComponent } from "./pets/pages/tab-content-setting/pages/register/register.component";
import { FeedbackComponent } from "./pets/pages/tab-content-setting/pages/feedback/feedback.component";
import { AboutComponent } from "./pets/pages/tab-content-setting/pages/about/about.component";
import { AccountActivityComponent } from "./pets/pages/tab-content-setting/pages/account-activity/account-activity.component";

export const routes: Routes = [
  { path: "", redirectTo: PATH_MATCH_REDIRECT_TO, pathMatch: "full" },
  {
    path: ROUTE.PET,
    component: HomeComponent,
    children: [
      {
        path: ROUTE.HOME,
        component: HomeTabsComponent,
        children: [
          {
            path: ROUTE.TAB_1,
            loadComponent: () =>
              import("./pets/tabs/tab1/tab1.component").then(
                (m) => m.Tab1Component
              ),
          },
          {
            path: ROUTE.TAB_2,
            loadComponent: () =>
              import("./pets/tabs/tab2/tab2.component").then(
                (m) => m.Tab2Component
              ),
          },
          {
            path: ROUTE.TAB_3,
            loadComponent: () =>
              import("./pets/tabs/tab3/tab3.component").then(
                (m) => m.Tab3Component
              ),
          },
          {
            path: ROUTE.TAB_4,
            loadComponent: () =>
              import("./pets/tabs/tab4/tab4.component").then(
                (m) => m.Tab4Component
              ),
            children: [
              {
                path: ROUTE_TAB_4.PROFILE,
                component: ProfileComponent,
              },
              {
                path: ROUTE_TAB_4.PASSWORD,
                component: PasswordComponent,
              },
              {
                path: ROUTE_TAB_4.SETTINGS,
                component: SettingComponent,
              },
              {
                path: ROUTE_TAB_4.NOTIFICATIONS,
                component: NotificationsComponent,
              },
              {
                path: ROUTE_TAB_4.USERS,
                component: UsersComponent,
              },
              {
                path: ROUTE_TAB_4.REGISTER,
                component: RegisterComponent,
              },
              {
                path: ROUTE_TAB_4.FEEDBACK,
                component: FeedbackComponent,
              },
              {
                path: ROUTE_TAB_4.ABOUT,
                component: AboutComponent,
              },
              {
                path: ROUTE_TAB_4.ACCOUNT_ACTIVITY,
                component: AccountActivityComponent,
              },
              {
                path: "",
                redirectTo: ROUTE_TAB_4.PROFILE,
                pathMatch: "full",
              },
              {
                path: "**",
                redirectTo: ROUTE_TAB_4.PROFILE,
              },
            ],
          },
        ],
      },
      {
        path: ROUTE.DETAILS,
        component: PetDetailsComponent,
      },
    ],
  },
];
