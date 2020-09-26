import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  LoadingController,
  AlertController,
  ToastController,
  NavController,
} from "@ionic/angular";
import { FirebaseService } from "../services/data/firebase.service";
import { Router } from "@angular/router";
import { FlashCard } from "../models/flash-card.interface";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-create",
  templateUrl: "./create.page.html",
  styleUrls: ["./create.page.scss"],
})
export class CreatePage implements OnInit {
  flashcard = {} as FlashCard;

  constructor(
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  ) {}
  ngOnInit() {}

  async createFlashCard(flashcard: FlashCard) {
    this.firestore.collection("flashcards").add(flashcard);
    this.navCtrl.navigateRoot("home");
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000,
      })
      .then((toastData) => toastData.present());
  }
}
