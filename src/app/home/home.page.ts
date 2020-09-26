import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Observable } from "rxjs";
import { FlashCard } from "../models/flash-card.interface";
import { FirebaseService } from "../services/data/firebase.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { firestore } from "firebase/app";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  flashcards: any;
  heartType: string = "heart-empty";
  constructor(
    private firestore: AngularFirestore,
    public navCtrl: NavController
  ) {}
  getFlashCards(): Observable<any> {
    return this.firestore.collection<any>("flashcards").valueChanges();
  }

  deleteFlashCard(id: string) {
    this.firestore.doc("flashcards/" + id).delete();
  }

  ngOnInit() {
    this.getFlashCards().subscribe((data) => {
      this.flashcards = data;
      this.heartType = data.likes ? "heart" : "heart-empty";
      console.log(data);
    });
  }

  /* toggleHeart(id: string) {
    if (this.heartType == "heart-empty") {
      this.firestore.doc("flashcards/" + id).update({
        likes: firestore.FieldValue.arrayUnion(this.flashcards),
      });
    } else {
      this.firestore.doc("flashcards/" + id).update({
        likes: firestore.FieldValue.arrayRemove(this.flashcards),
      });
    }
  } */
}
