import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import AuthGuard from "../core/guards/auth/auth.guard";
import PreviewComponent from "./pages/preview/preview.component";
import SearchPageComponent from "./pages/search-page/search-page.component";

const routes : Routes = [
  { path: '', component: SearchPageComponent, title: 'Search results', canActivate: [AuthGuard] ,canLoad: [AuthGuard]},
  { path: ':id', canActivate: [AuthGuard] ,canLoad: [AuthGuard], component: PreviewComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
class YoutubeRoutingModule {}
export default YoutubeRoutingModule;
