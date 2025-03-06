import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IWorkshop from './models/IWorkshop';

@Injectable({
  providedIn: 'root',
})
export class WorkshopsService {
  constructor(private http: HttpClient) {}

  getWorkshops(page: number) {
    // Explore URLSearchParams object
    return this.http.get<IWorkshop[]>(`https://workshops-server.onrender.com/workshops`, {
      params: {
        _page: page,
      },
    });
  }

  getWorkshopById(workshopId: number) {
    return this.http.get<IWorkshop>(
        `https://workshops-server.onrender.com/workshops/${workshopId}`
    );
}
}
