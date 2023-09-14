import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TestPage } from './test.page';

const routes: Routes = [
  {
    path: '',
    component: TestPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}
