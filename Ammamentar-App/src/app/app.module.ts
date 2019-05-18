import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroComponent } from './Cadastro/Cadastro.component';
import { CadastrosComponent } from './cadastros/cadastros.component';

@NgModule({
   declarations: [
      AppComponent,
      CadastroComponent,
      CadastrosComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
