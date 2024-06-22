import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { MineralType } from '../models/mineral-type';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class MineralTypeService {
  private url = `${base_url}/mineral-types`;
  private listaCambio = new Subject<MineralType[]>();

  constructor(private httpClient: HttpClient) {}

  // Insertar
  insert(mineralType: MineralType) {
    return this.httpClient.post(this.url, mineralType);
  }

  // Listar
  list() {
    return this.httpClient.get<MineralType[]>(this.url);
  }

  // Eliminar
  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  // Listar por ID
  listId(id: number) {
    return this.httpClient.get<MineralType>(`${this.url}/${id}`);
  }

  // Buscar por tipo de mineral
  search(mineral: string) {
    return this.httpClient.get<MineralType[]>(`${this.url}/buscar/${mineral}`);
  }

  // Métodos para manejar la lista local
  setList(listaNueva: MineralType[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
