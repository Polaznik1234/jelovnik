import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { JelovnikComponent } from './jelovnik/jelovnik.component';
import { JelovniciComponent } from './jelovnici/jelovnici.component';
import { JelaComponent } from './jela/jela.component';
import { NavComponent } from './nav/nav.component';
import { JeloUpdateComponent } from './jelo-update/jelo-update.component';
import { FormsModule } from '@angular/forms';
import { JeloCreateComponent } from './jelo-create/jelo-create.component';
import { JelovnikCreateComponent } from './jelovnik-create/jelovnik-create.component';

@NgModule({
  declarations: [
    AppComponent,
    JelovnikComponent,
    JelovniciComponent,
    JelaComponent,
    JeloUpdateComponent,
    JeloCreateComponent,
    NavComponent,
    JelovnikCreateComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
