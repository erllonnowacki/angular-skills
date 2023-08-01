import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  MatGridListModule,
  MatProgressSpinnerModule,
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppComponent } from "./app.component";
import { CardComponent } from "./dashboard/card/card.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FakeApiService } from "./services/fake-api.service";
import { HelloComponent } from "./hello.component";
import { BreakpointObserver, LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatGridListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeApiService, { delay: 4000 }),
    FlexLayoutModule,
    LayoutModule,
  ],
  declarations: [
    DashboardComponent,
    CardComponent,
    AppComponent,
    HelloComponent,
  ],
  providers: [BreakpointObserver],
  bootstrap: [AppComponent],
})
export class AppModule { }
