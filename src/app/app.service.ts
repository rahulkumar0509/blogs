import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  screenDataTransfer;

  constructor(private http: HttpClient) { }

  httpGet(url){
    return this.http.get(environment.apiUrl + url);
  }
  httpPost(url, payload){
    return this.http.post(environment.apiUrl + url, payload);
  }

  setScreenDataTransfer(data){
    this.screenDataTransfer = data;
  }
  getScreenDataTransfer(){
    return this.screenDataTransfer;
  }
}
