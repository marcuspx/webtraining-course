import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../../config/app.config';
import { HttpService } from '../../common-services/http.service';
import { Http } from '@angular/http';
import { Poll } from '../models/poll.model';

@Injectable()
export class PollsService extends HttpService {
socket;

  constructor( private http: Http ) {
    super( http );
    this.socket = io(AppConfig.REAL_TIME_SERVER_URL);
  }


  getPolls(): Observable<Array<Poll>> {
    const url = `${AppConfig.API_SERVER_URL}/polls`;
    const token = 'NotAvailable';

    return this.get( url, token );
  }

  getPollById( id: number ): Observable<Poll> {
    const url = `${AppConfig.API_SERVER_URL}/polls/${id}`;
    const token = 'NotAvailable';
    return this.get( url, token );
  }

}
