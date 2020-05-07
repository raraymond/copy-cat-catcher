import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { switchMap, map } from 'rxjs/operators';
import {File} from '../upload.model'

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  //create new file document for current user
  async createFile(data: File){
    const user = await this.afAuth.currentUser;
    return this.db.collection('files').add( {...data,
      uid: user.uid,
      downloadURL: this.downloadURL,
      );
  }
}
