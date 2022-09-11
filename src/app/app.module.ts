import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurahPageComponent } from './components/surah-page/surah-page.component';
import { UrlInterceptor } from './interceptors/http.interceptor';
import { QuranComponent } from './components/quran/quran.component';

@NgModule({
  declarations: [
    AppComponent,
    SurahPageComponent,
    QuranComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
