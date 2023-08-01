import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { ICard } from "../interfaces/card.interface";
import { IGridColumns } from "../interfaces/gridColumns.interface";
import { LikesService } from "../services/likes.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  isLoading: boolean = true;
  spinnerMode = "indeterminate";

  cards: Array<ICard>;
  cols: number;
  gridByBreakpoint: IGridColumns = {
    xs: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 4,
  };
  currentBreakpoint: Observable<string>;

  constructor(
    private httpClient: HttpClient,
    private breakpointObserver: BreakpointObserver,
    private likesService: LikesService
  ) {}

  ngOnInit() {
    this.getSkills();
    this.httpClient.get<ICard[]>("/api/skills").subscribe((ret: Array<any>) => {
      this.cards = ret;
      this.isLoading = false;
    });

    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      });
  }

  private getSkills() {
    this.likesService.getSkills().subscribe((likes) => {
      this.cards = likes;
    });
  }
}
