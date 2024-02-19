import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BmiServiceService {

  apiUrl = "http://localhost:8080/calculate-bmi"

  constructor(private http: HttpClient) { }

  public calculateBmi(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, userData);
  }
}
