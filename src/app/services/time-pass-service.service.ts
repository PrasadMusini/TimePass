import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimePassClass, TimePassClasss } from '../class/time-pass-class';

@Injectable({
  providedIn: 'root'
})
export class TimePassServiceService {

  constructor(private http:HttpClient) { }

  public timePassPost(data:TimePassClass)
  {
    return this.http.post<TimePassClass>('http://localhost:3000/UserInfo',data)
  }

  public timePassPostt(data:TimePassClasss)
  {
    return this.http.post<TimePassClasss>('http://localhost:3000/UserInfo',data)
  }

  public getAllService()
  {
    return this.http.get<any[]>('http://localhost:3000/UserInfo');
  }

  addToList(){
    return this.http.get<any[]>('http://localhost:3001/UserInfo')
  }
}
