import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { NgModule } from '@angular/core';
import { TestPage } from './pages/test/test.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./pages/test/test.module').then((m) => m.TestModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
