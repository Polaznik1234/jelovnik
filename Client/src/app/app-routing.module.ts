import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JelaComponent } from './jela/jela.component';
import { JelovniciComponent } from './jelovnici/jelovnici.component';
import { JelovnikComponent } from './jelovnik/jelovnik.component';
import { JeloUpdateComponent } from './jelo-update/jelo-update.component';
import { JeloCreateComponent } from './jelo-create/jelo-create.component';
import { JelovnikCreateComponent } from './jelovnik-create/jelovnik-create.component';

const routes: Routes = [
  {path: '', component: JelovniciComponent},
  {path: 'jelovnici', component: JelovniciComponent},
  {path: 'jelovnik/:id', component: JelovnikComponent},
  {path: 'jelovnik-create', component: JelovnikCreateComponent},
  {path: 'jela', component: JelaComponent},
  {path: 'jelo-update/:id', component: JeloUpdateComponent},
  {path: 'jelo-create', component: JeloCreateComponent},
  {path: '**', component: JelovniciComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
