import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { BoolToTextPipe } from './shared/pipes/bool-to-text.pipe';
import { BoolToColorDirective } from './shared/directives/bool-to-color.directive';
import { UserModule } from './features/user/user.module';
import { ChildOneComponent } from './shared/components/child-one/child-one.component';
import { TestOneComponent } from './shared/components/test-one/test-one.component';
import { LoggerService } from './shared/services/logger.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    ChildOneComponent,
    TestOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GameModule,
    UserModule
  ],
  providers: [
    // LoggerService,
    // En prod ne retourne rien, sinon retourne le LoggerService
    { provide: LoggerService, useFactory: () => { return environment.production ? null : new LoggerService() }}
  ],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
