import { registerLocaleData } from "@angular/common";
import { HttpClient, provideHttpClient } from "@angular/common/http";
import en from "@angular/common/locales/en";
import vi from "@angular/common/locales/vi";
import { enableProdMode, importProvidersFrom, isDevMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { provideServiceWorker } from "@angular/service-worker";
import { provideIonicAngular } from "@ionic/angular/standalone";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { NZ_CONFIG, NzConfig } from "ng-zorro-antd/core/config";
import { NZ_DATE_CONFIG, NZ_I18N, vi_VN } from "ng-zorro-antd/i18n";
import { MarkdownModule } from "ngx-markdown";
import { provideEnvironmentNgxMask } from "ngx-mask";
import { routes } from "./app/app-routing.module";
import { AppComponent } from "./app/app.component";
import { ConfigurationService } from "./app/services/configuration.service";
import { environment } from "./environments/environment";

const ngZorroConfig: NzConfig = {
  theme: {
    primaryColor: "#222c46",
  },
};

if (environment.production) {
  enableProdMode();
}
registerLocaleData(vi);
registerLocaleData(en);
export function createTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(MarkdownModule.forRoot()),
    provideAnimations(),
    provideIonicAngular({ mode: "ios" }),
    provideHttpClient(),
    provideEnvironmentNgxMask(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
        defaultLanguage: "vi",
      })
    ),
    { provide: NZ_I18N, useValue: vi_VN },
    {
      provide: NZ_DATE_CONFIG,
      useValue: {
        firstDayOfWeek: 1,
      },
    },
    provideServiceWorker("ngsw-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:30000",
    }),
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    ConfigurationService,
  ],
}).then();
