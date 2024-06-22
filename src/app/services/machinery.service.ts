import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Machinery } from '../models/machinery';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class MachineryService {

  private url = `${base_url}/machinery`;
  private listaCambio = new Subject<Machinery[]>();

  constructor(private httpClient: HttpClient) {}

  // Insertar
  insert(machinery: Machinery) {
    return this.httpClient.post(this.url, machinery);
  }

  // Listar
  list() {
    return this.httpClient.get<Machinery[]>(this.url);
  }

  // Eliminar
  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  // Listar por ID
  listId(id: number) {
    return this.httpClient.get<Machinery>(`${this.url}/${id}`);
  }

  // Contar maquinaria por modelo
  contarMaquinariaPorModelo() {
    return this.httpClient.get<Object[]>(`${this.url}/count/model`);
  }

  // Buscar por modelo
  buscarModelo(modelo: string) {
    return this.httpClient.get<Machinery[]>(`${this.url}/buscar/modelo/${modelo}`);
  }

  // Métodos para manejar la lista local
  setList(listaNueva: Machinery[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
