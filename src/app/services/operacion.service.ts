import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperacionService {

  constructor() { }
  private storageKey = 'operaciones';
  historial: string[] = [];

  agregarOperacion(operacion: string) {
    this.historial.push(operacion);
    localStorage.setItem(this.storageKey, JSON.stringify(operacion));
  }

  limpiarHistorial() {
    this.historial = [];
  }

  obtenerHistorial(): string[] {
    // return this.historial;
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

}
