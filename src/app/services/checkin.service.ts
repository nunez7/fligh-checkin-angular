import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  private apiUrl = 'http://localhost:8080/flightreservation/reservations';

  constructor(private http: HttpClient) { }

  getReservationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateReservation(reservation: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, reservation);
  }
}