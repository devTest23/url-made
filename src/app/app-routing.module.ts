import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { UrlShortnerComponent } from './url-shortner/url-shortner.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shortner',
    pathMatch: 'full',
  },
  {
    path: 'shortner',
    component: UrlShortnerComponent,
  },
  {
    path: ':id',
    component: DemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
