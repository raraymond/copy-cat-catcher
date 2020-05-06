import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { HomePageComponent } from './components/home-page/home-page.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';



const config = {
  apiKey: "AIzaSyAQXs38owsseq9wzk5tw4bSYLVCTTSUjqA",
  authDomain: "copy-cat-catcher-348e7.firebaseapp.com",
  databaseURL: "https://copy-cat-catcher-348e7.firebaseio.com",
  projectId: "copy-cat-catcher-348e7",
  storageBucket: "copy-cat-catcher-348e7.appspot.com",
  messagingSenderId: "58313302603",
  appId: "1:58313302603:web:9b21954d7d052b154aa3ce",
  measurementId: "G-PCE4B3RNE4"
};

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
