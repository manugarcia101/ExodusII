import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private GENERAL_ENDPOINT = 'http://localhost:8000/api';

  token: any;

  constructor(private httpClient: HttpClient) { 
  }

  public async setToken(tok){
    this.token = tok;
  }

  public getIPAddress(){  
    return this.httpClient.get("http://api.ipify.org/?format=json");  
  }

  public getToken(ip): Observable<any[]> {
    const complete_api = this.GENERAL_ENDPOINT + '/getToken/' + ip.ip;
    return this.httpClient.get<any>(complete_api);
  }

  getMapCities(index): Observable<any[]> {
    const complete_api = this.GENERAL_ENDPOINT + '/salaries/'+ index +'/common_user';
    return this.httpClient.get<any>(complete_api);
  }

  getWorldCities(text): Observable<any[]> {
    const complete_api = this.GENERAL_ENDPOINT + '/worldcities/'+ text +'/common_user';
    return this.httpClient.get<any>(complete_api);
  }

  getAllCities(): Observable<any[]> {
    const complete_api = this.GENERAL_ENDPOINT + '/allcities/common_user';
    return this.httpClient.get<any>(complete_api);
  }

  getCityData(city, country): Observable<any[]> {
    const complete_api = this.GENERAL_ENDPOINT + '/citydata/' + city + '/' + country + '/common_user';
    return this.httpClient.get<any>(complete_api);
  }

  getCountryData(country): Observable<any[]> {
    const complete_api = this.GENERAL_ENDPOINT + '/countrydata/' + country + '/common_user';
    return this.httpClient.get<any>(complete_api);
  }

  getCurrencies(): Observable<any[]> {
    const complete_api = this.GENERAL_ENDPOINT + '/currencies/common_user';
    return this.httpClient.get<any>(complete_api);
  }

  getCurrencyChange(actualCurrency, newCurrency): Observable<number> {
    const complete_api = this.GENERAL_ENDPOINT + '/currencychange/' + actualCurrency + '/' + newCurrency + '/common_user';
    return this.httpClient.get<any>(complete_api);
  }
}
