import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { DevopsComponent } from './devops/devops.component';
import { CodingComponent } from './coding/coding.component';
import { EpicodusComponent } from './epicodus/epicodus.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { FamilyComponent } from './family/family.component';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DevopsComponent,
    CodingComponent,
    EpicodusComponent,
    CatsComponent,
    DogsComponent,
    FamilyComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
