import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";

import { HomePageRoutingModule } from "./home-routing.module";
import { ComponentsModule } from "../components/components.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    HomePageRoutingModule,
    ComponentsModule,
    Ng2SearchPipeModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {
  searchText;
}
