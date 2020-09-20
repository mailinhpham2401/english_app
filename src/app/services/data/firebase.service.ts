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
  private flashCards: FlashCard[];
  private flashCardCollection: AngularFirestoreCollection<FlashCard>;

  constructor(private afs: AngularFirestore) {
    // define collection
    this.flashCardCollection = this.afs.collection<FlashCard>("flashcards");
    // Get Collection data
    /* this.flashcards = this.flashCardCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
		); */
    const flashCards = [
      { id: 1, back: "accreditation", front: "offizielle Zustimmung" },
      {
        id: 2,
        back: "AIDA",
        front:
          "Attention, Interest, Desire, Action (Aufmerksamkeit, Interresse, Wunsch, Handlung)-> Modell zur Werbewirkung",
      },
      { id: 3, back: "airtime", front: "Sendezeit" },
      { id: 4, back: "ambient noise", front: "Umgebungsgeräusch" },
      { id: 5, back: "ambitious", front: "ehrgeizig,strebsam" },
    ];
    this.flashCards = this.shuffle(flashCards);
  }

  //geting all flashCards
  getFlashCards(): Observable<FlashCard[]> {
    return of(this.flashCards);
  }

  //geting single flashCard

  getFlashCard(id: string): Observable<FlashCard> {
    return this.flashCardCollection
      .doc<FlashCard>(id)
      .valueChanges()
      .pipe(
        take(1),
        map((flashcard) => {
          console.log(flashcard);
          flashcard.id = id;
          return flashcard;
        })
      );
  }
  //create new flashCard

  addFlashCard(flashcard: FlashCard): Promise<DocumentReference> {
    return this.flashCardCollection.add(flashcard);
  }

  //update flashCard

  updateFlashCard(flashcard: FlashCard): Promise<void> {
    return this.flashCardCollection
      .doc(flashcard.id)
      .update({ front: flashcard.front, back: flashcard.back });
  }
  // delete flashCard

  /* deleteFlashCard(id: string): Promise<void> {
    return this.flashCardCollection.doc(id).delete();
  } */

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
