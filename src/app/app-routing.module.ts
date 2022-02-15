import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectComponent } from './redirect/redirect.component'
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ShortenComponent } from './shorten/shorten.component';

const routes: Routes = [
  { path: 'shorten', component: ShortenComponent },
  { path: 'not-found', component: NotfoundComponent },
  { path: '', redirectTo: '/shorten', pathMatch: 'full' },
  { path: '**', component: RedirectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }