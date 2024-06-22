import { Injectable } from '@angular/core';
import { EmployeeType } from '../models/employee-type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

const base_url = environment.base; // Asegúrate de que baseUrl esté configurado en environment.ts

@Injectable({
  providedIn: 'root'
})
export class EmployeeTypeService {
  private url = `${base_url}/employee-types`;
  private listaCambio = new Subject<EmployeeType[]>();

  constructor(private httpClient: HttpClient) {}

  // Insertar
  insert(employeeType: EmployeeType) {
    return this.httpClient.post(this.url, employeeType);
  }

  // Listar
  list() {
    return this.httpClient.get<EmployeeType[]>(this.url);
  }

  // Eliminar
  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  // Listar por ID
  listId(id: number) {
    return this.httpClient.get<EmployeeType>(`${this.url}/${id}`);
  }

  // Métodos para manejar la lista local
  setList(listaNueva: EmployeeType[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
