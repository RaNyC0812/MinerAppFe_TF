import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Mine } from '../models/mine';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class MineService {

  private url = `${base_url}/mines`;
  private listaCambio = new Subject<Mine[]>();

  constructor(private httpClient: HttpClient) {}

  // Insertar
  insert(mine: Mine) {
    return this.httpClient.post(this.url, mine);
  }

  // Listar
  list() {
    return this.httpClient.get<Mine[]>(this.url);
  }

  // Eliminar
  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  // Listar por ID
  listId(id: number) {
    return this.httpClient.get<Mine>(`${this.url}/${id}`);
  }

  // Métodos para manejar la lista local
  setList(listaNueva: Mine[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
