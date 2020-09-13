import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Observable } from "rxjs";
import { FlashCard } from "../models/flash-card.interface";
import { FirebaseService } from "../services/data/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  flashCards: any;
  flashCardList: Observable<FlashCard[]>;
  constructor(
    public navCtrl: NavController,
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.flashCardList = this.firebaseService.getFlashCards();
  }
}
