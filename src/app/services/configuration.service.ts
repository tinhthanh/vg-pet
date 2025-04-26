import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { get } from "lodash";
import { en_US, NzI18nService, vi_VN } from "ng-zorro-antd/i18n";
import { BehaviorSubject, Observable } from "rxjs";
import { THEME } from "../common/theme.const";
import {
  CONFIGURATION_DEFAULT,
  NOTIFICATION_DEFAULT,
} from "../consts/common.const";
import { IStatsInfo } from "../interfaces/stats.interface";
import { ConfigurationStatsService } from "./configuration-stats.service";
import { ThemeService } from "./theme.service";

@Injectable({
  providedIn: "root",
})
export class ConfigurationService {
  private configurationSubject$ = new BehaviorSubject<any>({});
  private notificationSubject$ = new BehaviorSubject<any>({});

  constructor(
    private themeService: ThemeService,
    private translateService: TranslateService,
    private i18n: NzI18nService,
    private configurationStatsService: ConfigurationStatsService
  ) {}

  //#region Configuration
  initialConfiguration() {
    const configuration = this.getConfiguration();
    this.configurationSubject = CONFIGURATION_DEFAULT;
    if (configuration) {
      this.configurationSubject = {
        theme: {
          isThemeDevice: get(
            configuration,
            "theme.isThemeDevice",
            CONFIGURATION_DEFAULT.theme.isThemeDevice
          ),
          isDarkTheme: get(
            configuration,
            "theme.isDarkTheme",
            CONFIGURATION_DEFAULT.theme.isDarkTheme
          ),
        },
        language: get(
          configuration,
          "language",
          CONFIGURATION_DEFAULT.language
        ),
        dateFormat: {
          format: get(
            configuration,
            "dateFormat.format",
            CONFIGURATION_DEFAULT.dateFormat.format
          ),
          startWeek: get(
            configuration,
            "dateFormat.startWeek",
            CONFIGURATION_DEFAULT.dateFormat.startWeek
          ),
        },
        measurement: {
          lengthUnit: get(
            configuration,
            "measurement.lengthUnit",
            CONFIGURATION_DEFAULT.measurement.lengthUnit
          ),
          weightUnit: get(
            configuration,
            "measurement.weightUnit",
            CONFIGURATION_DEFAULT.measurement.weightUnit
          ),
          temperatureUnit: get(
            configuration,
            "measurement.temperatureUnit",
            CONFIGURATION_DEFAULT.measurement.temperatureUnit
          ),
        },
      };
    }
    this.setConfiguration(this.configurationSubject.getValue(), true);
  }

  setConfiguration(payload: any, initial: boolean = false) {
    try {
      localStorage.setItem("configuration", JSON.stringify(payload));
      if (!initial) {
        this.initialConfiguration();
      }
      this.changeTheme();
      this.changeLanguage();
    } catch (error) {
      console.error("Error saving configuration to local storage:", error);
    }
  }

  getConfiguration(): any {
    try {
      const configuration = localStorage.getItem("configuration");
      const configurationParse = configuration
        ? JSON.parse(configuration)
        : null;
      return configurationParse ?? null;
    } catch (error) {
      console.error("Error reading configuration from local storage:", error);
      return null;
    }
  }

  clearConfiguration(): void {
    try {
      localStorage.removeItem("configuration");
    } catch (error) {
      console.error("Error clearing configuration from local storage:", error);
    }
  }

  resetConfiguration() {
    this.setConfiguration(CONFIGURATION_DEFAULT);
  }
  //#endregion Configuration

  //#region Notification
  initialNotification() {
    const notification = this.getNotification();
    this.notificationSubject = NOTIFICATION_DEFAULT;
    if (notification) {
      this.notificationSubject = {
        learningConfig: get(
          notification,
          "learningConfig",
          NOTIFICATION_DEFAULT.learningConfig
        ),
        appUpdate: get(
          notification,
          "appUpdate",
          NOTIFICATION_DEFAULT.appUpdate
        ),
        vibrateNotification: get(
          notification,
          "vibrateNotification",
          NOTIFICATION_DEFAULT.vibrateNotification
        ),
      };
    }
    this.setNotification(this.notificationSubject.getValue(), true);
  }

  setNotification(payload: any, initial: boolean = false) {
    try {
      localStorage.setItem("notification", JSON.stringify(payload));
      if (!initial) {
        this.initialNotification();
      }
    } catch (error) {
      console.error("Error saving configuration to local storage:", error);
    }
  }

  getNotification(): any {
    try {
      const notification = localStorage.getItem("notification");
      const notificationParse = notification ? JSON.parse(notification) : null;
      return notificationParse ?? null;
    } catch (error) {
      console.error("Error reading configuration from local storage:", error);
      return null;
    }
  }

  clearNotification(): void {
    try {
      localStorage.removeItem("notification");
    } catch (error) {
      console.error("Error clearing configuration from local storage:", error);
    }
  }

  resetNotification() {
    this.setNotification(CONFIGURATION_DEFAULT);
  }
  //#endregion Notification

  private changeTheme() {
    const configuration = this.configurationSubject.getValue();
    const isDarkTheme = get(configuration, "theme.isDarkTheme");
    this.themeService.changeTheme(isDarkTheme ? THEME.DARK : THEME.LIGHT);
  }

  private changeLanguage() {
    const configuration = this.configurationSubject.getValue();
    const lang = get(configuration, "language");
    this.translateService.use(lang);
    if (lang === "vi") {
      this.i18n.setLocale(vi_VN);
    } else {
      this.i18n.setLocale(en_US);
    }
  }

  get configurationSubject() {
    return this.configurationSubject$;
  }

  set configurationSubject(value: any) {
    this.configurationSubject$.next(value);
  }

  get notificationSubject() {
    return this.notificationSubject$;
  }

  set notificationSubject(value: any) {
    this.notificationSubject$.next(value);
  }

  getStatsInfoConfig(): Observable<{ data: Array<IStatsInfo> }> {
    return this.configurationStatsService.getConfigurationStats();
  }

  setStatsInfoConfigDefault() {
    return this.configurationStatsService.setConfigurationStatsDefault();
  }
}
