import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;

  constructor(private storage: AngularFireStorage,
              private auth: AuthService,
              private fireStore: AngularFirestore) {
  }

  ngOnInit() {
  }

  startUpload(event: FileList) {
    const file = event.item(0);
    // TODO file types check client/server
    // const metadata = {app: 'MAP_BASED_WEBSITE', uploadDate: new Date()};

    const random = Math.floor(Math.random()
      * 100).toString(16);

    const path = `uploads/${this.auth.currentUser.getValue().key}/${random}${file.name}`;
    this.task = this.storage.upload(path, file); // , <any>{metadata}

    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();
    this.snapshot.pipe(
      tap(
        (s) => {
          if (s.bytesTransferred === s.totalBytes) {
            this.fireStore.collection(path)
              .add(file.name);
          }
        }
      )
    ).subscribe(console.log);

    this.downloadURL = this.task.downloadURL();

  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

}
