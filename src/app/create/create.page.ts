import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoadingController, AlertController } from "@ionic/angular";
import { FirebaseService } from "../services/data/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create",
  templateUrl: "./create.page.html",
  styleUrls: ["./create.page.scss"],
})
export class CreatePage implements OnInit {
  flipped: boolean = true;
  public addFlashCard: FormGroup;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public firebaseService: FirebaseService,
    private router: Router,
    formBuilder: FormBuilder
  ) {
    this.addFlashCard = formBuilder.group({
      front: ["", Validators.required],
      back: ["", Validators.required],
    });
  }

  ngOnInit() {}
  flip() {
    this.flipped = !this.flipped;
  }
  async createFlashCard() {
    const loading = await this.loadingCtrl.create();

    const front = this.addFlashCard.value.front;
    const back = this.addFlashCard.value.back;

    this.firebaseService.getFlashCards().subscribe(
      () => {
        loading.dismiss().then(() => {
          this.router.navigateByUrl("");
        });
      },
      (error) => {
        console.error(error);
      }
    );

    return await loading.present();
  }
}
