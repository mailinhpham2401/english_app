import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from "@angular/fire/firestore";
import { FlashCard } from "../../models/flash-card.interface";
import { map, take } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}
  deleteFlashCard(id: any) {
    this.firestore.doc("flashcards/" + id).delete();
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
