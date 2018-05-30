import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login/login-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { ChatComponent } from './chat/chat.component';


var firebaseConfig = {
  apiKey: "AIzaSyDBF6jC-Gi_WISa1sOyfi1N2kxzJRUtP_0",
  authDomain: "tamz-chat-app.firebaseapp.com",
  databaseURL: "https://tamz-chat-app.firebaseio.com",
  projectId: "tamz-chat-app",
  storageBucket: "tamz-chat-app.appspot.com",
  messagingSenderId: "1047061400998"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

// Other imports removed for brevity


// Paste in your credentials that you saved earlier


