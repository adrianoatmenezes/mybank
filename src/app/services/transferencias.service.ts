import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciasService {
  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  adicionar(transferencia: any) {
    this.validar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  validar(transferencia: any) {
    transferencia.data = new Date();
  }

  get transferencia() {
    return this.listaTransferencia;
  }
}
