import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { youTubeSearchInjectables } from './you-tube-search-injectables';
import { YouTubeSearchService } from './you-tube-search.service';
import { SearchBoxComponent } from './search-box-component/search-box-component.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchresultComponent,
    YouTubeSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [youTubeSearchInjectables, YouTubeSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
