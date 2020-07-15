import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CountrycardComponent } from './countrycard/countrycard.component';


const routes: Routes = [
  { path: '', redirectTo: '/card', pathMatch: 'full' },
  { path: 'card', component: CardComponent },
  { path: 'countrycard/:id', component: CountrycardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
