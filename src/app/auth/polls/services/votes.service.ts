import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { AppConfig } from '../../../config/app.config';
import { Answer } from '../models/answer.model';

@Injectable()
export class VotesService {
  socket;
  constructor() {
    this.socket = io(AppConfig.REAL_TIME_SERVER_URL);
  }

  sendVote( answer: Answer ) {
    console.log('sending vote');
    this.socket.emit('nuevo voto', answer);
  }
}
