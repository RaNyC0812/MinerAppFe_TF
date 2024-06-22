import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Maintenance } from '../models/maintenance';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  private url = `${base_url}/maintenance`;
  private listaCambio = new Subject<Maintenance[]>();

  constructor(private httpClient: HttpClient) {}

  // Insertar
  insert(maintenance: Maintenance) {
    return this.httpClient.post(this.url, maintenance);
  }

  // Listar
  list() {
    return this.httpClient.get<Maintenance[]>(this.url);
  }

  // Eliminar
  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  // Listar por ID
  listId(id: number) {
    return this.httpClient.get<Maintenance>(`${this.url}/${id}`);
  }

  // Buscar por nombre del tipo de maquinaria
  findByMachineryTypeName(machineryTypeName: string) {
    return this.httpClient.get<Maintenance[]>(`${this.url}/buscar/tipo-maquinaria/${machineryTypeName}`);
  }

  // Contar mantenimiento por máquina
  countMaintenanceByMachine() {
    return this.httpClient.get<Object[]>(`${this.url}/count/machine`);
  }

  // Buscar por fecha de mantenimiento
  findByMaintenanceDate(fecha: string) {
    return this.httpClient.get<Maintenance[]>(`${this.url}/buscar/fecha/${fecha}`);
  }

  // Métodos para manejar la lista local
  setList(listaNueva: Maintenance[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
