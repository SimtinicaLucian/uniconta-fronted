
import { Inject, Injectable, Optional } from '@angular/core';
import {
    HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent
} from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../api/encoder';

import { Observable } from 'rxjs';

import { Cheltuieli } from '../api/model/cheltuieli';


import { BASE_PATH, COLLECTION_FORMATS } from '../api/variables';
import { Configuration } from '../api/configuration';
import { isNumber } from 'util';
import { TokenStorageService } from '../token-storage.service';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
    providedIn: 'root'
})
export class CheltuieliService {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public rows: any;
    username: string;

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration, private tokenStorageService: TokenStorageService) {

        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }



    /**
     * F
     * M
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchSumTotalCuTVA(observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public searchSumTotalCuTVA(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public searchSumTotalCuTVA(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public searchSumTotalCuTVA(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Number>(`${this.basePath}/cheltuieli/calculareSumaTotalaCuTVA`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    /**
     * Get user by user name
     * 
     * @param data1 The name that needs to be fetched. Use user1 for testing. 
     * @param data2 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public culculareSumaTotalaCuTVAData1Data2(data1: string, data2?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public culculareSumaTotalaCuTVAData1Data2(data1: string, data2?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public culculareSumaTotalaCuTVAData1Data2(data1: string, data2?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public culculareSumaTotalaCuTVAData1Data2(data1: string, data2?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (data1 === null || data1 === undefined) {
            throw new Error('Required parameter data1 was null or undefined when calling getUserByName.');
        }


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (data1 !== undefined && data1 !== null) {
            queryParameters = queryParameters.set('data1', <any>data1);
        }
        if (data2 !== undefined && data2 !== null) {
            queryParameters = queryParameters.set('data2', <any>data2);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Number>(`${this.basePath}/cheltuieli/culculareSumaTotalaCuTVADataMinDataMax`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }



     /**
     * Get user by user name
     * 
     * @param month The name that needs to be fetched. Use user1 for testing. 
     * @param year 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
      public calculareSumaTotalaCuTVAMonthYear(month: string, year?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
      public calculareSumaTotalaCuTVAMonthYear(month: string, year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
      public calculareSumaTotalaCuTVAMonthYear(month: string, year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
      public calculareSumaTotalaCuTVAMonthYear(month: string, year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
  
          if (month === null || month === undefined) {
              throw new Error('Required parameter data1 was null or undefined when calling getUserByName.');
          }
  
  
          let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
          if (month !== undefined && month !== null) {
              queryParameters = queryParameters.set('month', <any>month);
          }
          if (year !== undefined && year !== null) {
              queryParameters = queryParameters.set('year', <any>year);
          }
  
          let headers = this.defaultHeaders;
  
          // to determine the Accept header
          let httpHeaderAccepts: string[] = [
              'application/xml',
              'application/json'
          ];
          const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
          if (httpHeaderAcceptSelected != undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
          }
  
          // to determine the Content-Type header
          const consumes: string[] = [
          ];
  
          return this.httpClient.get<Number>(`${this.basePath}/cheltuieli/calculareSumaTotalaCuTVAMonthYear`,
              {
                  params: queryParameters,
                  withCredentials: this.configuration.withCredentials,
                  headers: headers,
                  observe: observe,
                  reportProgress: reportProgress
              }
          );
      }











}