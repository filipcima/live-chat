import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'chat', component: ChatComponent }
    // { path: '', redirectTo: '/login', pathMatch: 'full'  }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
