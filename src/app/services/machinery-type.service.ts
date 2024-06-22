import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { MachineryType } from '../models/machinery-type';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class MachineryTypeService {
  private url = `${base_url}/machinery-types`;
  private listaCambio = new Subject<MachineryType[]>();

  constructor(private httpClient: HttpClient) {}

  // Insertar
  insert(machineryType: MachineryType) {
    return this.httpClient.post(this.url, machineryType);
  }

  // Listar
  list() {
    return this.httpClient.get<MachineryType[]>(this.url);
  }

  // Eliminar
  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  // Listar por ID
  listId(id: number) {
    return this.httpClient.get<MachineryType>(`${this.url}/${id}`);
  }

  // Métodos para manejar la lista local
  setList(listaNueva: MachineryType[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
