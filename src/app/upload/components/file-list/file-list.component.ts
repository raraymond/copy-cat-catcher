import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {File} from '../../upload.model'
import {UploadService} from '../../services/upload.service'

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  files: File[];
  sub: Subscription

  constructor(public fileService: UploadService) { }

  ngOnInit(){
    this.sub = this.fileService.getUserFiles().subscribe(files => (this.files = files))
    console.log(this.files)
  }


}
