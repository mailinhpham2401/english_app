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
    const flashCards = [
      { back: "accreditation", front: "offizielle Zustimmung" },
      {
        back: "AIDA",
        front:
          "Attention, Interest, Desire, Action (Aufmerksamkeit, Interresse, Wunsch, Handlung)-> Modell zur Werbewirkung",
      },
      { back: "airtime", front: "Sendezeit" },
      { back: "ambient noise", front: "Umgebungsgeräusch" },
      { back: "ambitious", front: "ehrgeizig,strebsam" },
    ];
    this.flashCards = this.shuffle(flashCards);
    this.flashCardList = this.firebaseService.getFlashCards();
  }

  shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
