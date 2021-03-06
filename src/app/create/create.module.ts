import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CreatePageRoutingModule } from "./create-routing.module";

import { CreatePage } from "./create.page";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    CreatePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CreatePage],
})
export class CreatePageModule {}
