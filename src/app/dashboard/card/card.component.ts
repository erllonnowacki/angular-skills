import { LikesService } from "./../../services/likes.service";
import { Component, OnInit, Input } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { ICard } from "src/app/interfaces/card.interface";
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() card: ICard;
  buttonColor: string;
  constructor(private likesService: LikesService, private _snackBar: MatSnackBar) { }

  ngOnInit() { }

  onLike() {
    this.card.likes++;
    if (this.card.likes >= 5) {
      this.buttonColor = "blue";
    }
    if (this.card.likes > 10) {
      this.buttonColor = "orange";
      this._snackBar.open(`Mais de ${this.card.likes - 1} likes nesse card!`, "Fechar", { duration: 2000 });
    }
  }

  onShare() {
    // TODO: abrir o link do seu linkedin
    window.open("https://www.linkedin.com/in/erllon-nowacki/", "_blank");
    this._snackBar.open("Compartilhando...", "Fechar", { duration: 5000 });
  }
}
