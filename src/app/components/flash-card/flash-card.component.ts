import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/data/firebase.service';


@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
	styleUrls: ['./flash-card.component.scss'],
	providers:[]
})
export class FlashCardComponent implements OnInit {

	flipped: boolean = true;
  flashCardArray: any[];
  constructor(private firebaseService: FirebaseService) { }

	ngOnInit() {
		
	}
	
	flip(){
    this.flipped = !this.flipped;
  }

}
