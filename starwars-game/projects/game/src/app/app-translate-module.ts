import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

// Permet de récupérer les fichiers présents sur le serveur, comme ça s'ils sont mis à jour, le navigateur a les traductions à jour
export function translateLoadFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/translates/', '.json')
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoadFactory,
        // Permet d'inhection HttpClient à translateLoadFactory
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule]
})
export class AppTranslateModule { }
