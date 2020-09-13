import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { FlashCard } from '../../models/flash-card.interface';
import {map,take} from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

	private flashcards: Observable<FlashCard[]>;
	private flashCardCollection: AngularFirestoreCollection<FlashCard>;

	constructor(private afs: AngularFirestore) { 
		// define collection
		this.flashCardCollection = this.afs.collection<FlashCard>('flashcards');
		// Get Collection data
		this.flashcards = this.flashCardCollection.snapshotChanges().pipe(
			map( actions => {
				return actions.map(a=>{
					const data = a.payload.doc.data();
					const id = a.payload.doc.id;
					return {id, ...data};
				});
			})
		);
	}

	//geting all flashCards
	getFlashCards(): Observable<FlashCard[]>{
		return this.flashcards;
	}
	//geting single flashCard

	getFlashCard(id:string): Observable<FlashCard>{
		return this.flashCardCollection.doc<FlashCard>(id).valueChanges().pipe(
			take(1),
			map(flashcard =>{
				flashcard.id = id;
				return flashcard;
			})
		)
	}
	//create new flashCard

	addFlashCard(flashcard: FlashCard): Promise<DocumentReference>{
		return this.flashCardCollection.add(flashcard);
	}
	
	//update flashCard

	updateFlashCard(flashcard: FlashCard): Promise<void>{
		return this.flashCardCollection.doc(flashcard.id).update({front:flashcard.front, back:flashcard.back});
	}
	// delete flashCard

	deleteFlashCard(id:string): Promise<void>{
		return this.flashCardCollection.doc(id).delete();
	}
}