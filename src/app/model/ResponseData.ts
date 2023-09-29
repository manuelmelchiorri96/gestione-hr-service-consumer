import { UtenteHr } from './UtenteHr';

export class ResponseData {
  utentiHR: UtenteHr[];

  constructor(utentiHR: UtenteHr[]) {
    this.utentiHR = utentiHR;
  }
}
