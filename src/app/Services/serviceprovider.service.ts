import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { IIncludedAttribute } from '../interfaces/IIncludedAttribute';
import { IProviderAttribute } from '../interfaces/IProviderAttribute';
import { IResponse } from '../interfaces/IResponse';
import { IStagingProvider } from '../interfaces/IStagingProvider';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceproviderService extends BaseService {

  constructor(private http: HttpClient) { super(); }
  getProviders(): Observable<IResponse<IStagingProvider<IProviderAttribute>, IStagingProvider<IIncludedAttribute>>> {
    return this.http.get<IResponse<IStagingProvider<IProviderAttribute>, IStagingProvider<IIncludedAttribute>>>(`${this.rootUrl}/providers?include=locations%2Cschedules.location&page[number]=1&page[size]=20`);
  }
}
