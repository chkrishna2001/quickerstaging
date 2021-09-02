import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IStagingService } from '../interfaces/IStagingService';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/IResponse';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class HealthserviceService extends BaseService {
  constructor(private http: HttpClient) { super(); }
  getServices(): Observable<IResponse<IStagingService , null>> {
    return this.http.get<IResponse<IStagingService ,  null>>(`${this.rootUrl}/services`);
  }
}
