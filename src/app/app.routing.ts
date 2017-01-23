import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent} from './about/about.component';
import { MarketplaceComponent }   from './marketplace/marketplace.component';
import { CatsComponent } from './cats/cats.component';
import { CodingComponent } from './coding/coding.component';
import { DevopsComponent } from './devops/devops.component';
import { DogsComponent } from './dogs/dogs.component';
import { EpicodusComponent } from './epicodus/epicodus.component';
import { FamilyComponent } from './family/family.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
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
