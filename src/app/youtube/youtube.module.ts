import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import CardComponent from './components/card/card.component';
import CardDirective from './directives/card.directive';
import FilterPipe from './pipes/filter/filter.pipe';
import YoutubeRoutingModule from './youtube-routing.module';
import SearchPageComponent from './pages/search-page/search-page.component';
import PreviewComponent from './pages/preview/preview.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    CardComponent,
    CardDirective,
    FilterPipe,
    SearchPageComponent,
    PreviewComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    YoutubeRoutingModule,
  ],
  exports: [
    CardComponent,
    CardDirective,
    FilterPipe,
  ],

})
class YoutubeModule { }
export default YoutubeModule;
