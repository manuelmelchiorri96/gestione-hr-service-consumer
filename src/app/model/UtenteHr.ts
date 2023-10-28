export class UtenteHr {
  nominativo: string;
  email: string;
  ruolo: boolean;

  constructor(nominativo: string, email: string, ruolo: boolean) {

    this.nominativo = nominativo;
    this.email = email;
    this.ruolo = ruolo;
  }
  
}
