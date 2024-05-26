import { Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { InGameComponent } from './in-game/in-game.component';
import { RulesComponent } from './rules/rules.component';

export const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
  },
  {
    path: 'in-game',
    component: InGameComponent,
  },
  {
    path: 'rules',
    component: RulesComponent,
  },
];
