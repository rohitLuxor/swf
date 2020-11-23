import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILinearData } from '../models/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwfServiceService {
  _STEP1URL = './assets/data/Step1.json';
  _STEP2URL = './assets/data/Step2.json';

  constructor(private http: HttpClient) {}

  getStep1Data() {
    return this.http.get(this._STEP1URL, { responseType: 'json' });
  }
  getStep2Data() {
    return this.http.get(this._STEP2URL, { responseType: 'json' });
  }
}
