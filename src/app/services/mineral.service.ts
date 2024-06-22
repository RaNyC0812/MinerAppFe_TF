import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Mineral } from '../models/mineral';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class MineralService {
  private url = `${base_url}/minerals`;
  private listaCambio = new Subject<Mineral[]>();

  constructor(private httpClient: HttpClient) {}

  // Insertar
  insert(mineral: Mineral) {
    return this.httpClient.post(this.url, mineral);
  }

  // Listar
  list() {
    return this.httpClient.get<Mineral[]>(this.url);
  }

  // Eliminar
  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  // Listar por ID
  listId(id: number) {
    return this.httpClient.get<Mineral>(`${this.url}/${id}`);
  }

  // Buscar por nombre
  search(nombre: string) {
    return this.httpClient.get<Mineral[]>(`${this.url}/buscar/${nombre}`);
  }

  // Obtener minerales con alta dureza
  getMineralsWithHighHardness() {
    return this.httpClient.get<Mineral[]>(`${this.url}/buscar/dureza/alta`);
  }

  // Contar minerales por mina
  getMineralCountByMine() {
    return this.httpClient.get<Object[]>(`${this.url}/count/mina`);
  }

  // Contar minerales extraídos por rango de fechas
  countMineralsExtractedByDateRange(startDate: string, endDate: string) {
    return this.httpClient.get<number>(`${this.url}/count/extraccion`, {
      params: { startDate, endDate }
    });
  }

  // Buscar minerales extraídos por rango de fechas
  findMineralsExtractedByDateRange(startDate: string, endDate: string) {
    return this.httpClient.get<Mineral[]>(`${this.url}/buscar/extraccion`, {
      params: { startDate, endDate }
    });
  }

  // Métodos para manejar la lista local
  setList(listaNueva: Mineral[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
