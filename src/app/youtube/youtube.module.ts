import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import CardComponent from './components/card/card.component';
import CardDirective from './directives/card.directive';
import FilterPipe from './pipes/filter/filter.pipe';
import SharedModule from '../shared/shared.module';
import YoutubeRoutingModule from './youtube-routing.module';
import SearchPageComponent from './pages/search-page/search-page.component';
import PreviewComponent from './pages/preview/preview.component';



@NgModule({
  declarations: [
    CardComponent,
    CardDirective,
    FilterPipe,
    SearchPageComponent,
    PreviewComponent
  ],
  imports: [
      CommonModule,
      SharedModule,
      YoutubeRoutingModule,
    ],
  exports : [
    CardComponent,
    CardDirective,
    FilterPipe,
  ]

})
class YoutubeModule { }
export default YoutubeModule;
