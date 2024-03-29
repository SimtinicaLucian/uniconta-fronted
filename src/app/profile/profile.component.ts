import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { StatisticsService } from '../services/api/statistics.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;



  constructor(private token: TokenStorageService, private httpClient: HttpClient, private statisticsService : StatisticsService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
  }

}
