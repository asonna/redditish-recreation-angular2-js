import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { CodingComponent } from './coding/coding.component';
import { DevopsComponent } from './devops/devops.component';
import { DogsComponent } from './dogs/dogs.component';
import { EpicodusComponent } from './epicodus/epicodus.component';
import { FamilyComponent } from './family/family.component';
import { CategoryListComponent} from './category-list/category-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CategoryListComponent
  },
  {
    path: 'cats',
    component: CatsComponent
  },
  {
    path: 'coding',
    component: CodingComponent
  },
  {
    path: 'devops',
    component: DevopsComponent
  },
  {
    path: 'dogs',
    component: DogsComponent
  },
  {
    path: 'epicodus',
    component: EpicodusComponent
  },
  {
    path: 'family',
    component: FamilyComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
