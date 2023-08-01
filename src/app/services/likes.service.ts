import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import { catchError, retry } from "rxjs/operators";
import { ICard } from "../interfaces/card.interface";

@Injectable({
  providedIn: "root",
})
export class LikesService {
  private apiUrl = "api/skills";
  constructor(private http: HttpClient) {}

  getSkills(): Observable<ICard[]> {
    return this.http.get<ICard[]>(this.apiUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
