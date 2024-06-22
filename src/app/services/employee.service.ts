import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

const base_url = environment.base;// lo que se pone el por8080
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = `${base_url}/employees`;
  private listaCambio = new Subject<Employee[]>();

  constructor(private httpClient: HttpClient) {}

  // Insertar
  insert(employee: Employee) {
    return this.httpClient.post(this.url, employee);
  }

  // Listar
  list() {
    return this.httpClient.get<Employee[]>(this.url);
  }

  // Eliminar
  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  // Listar por ID
  listId(id: number) {
    return this.httpClient.get<Employee>(`${this.url}/${id}`);
  }
  // Actualizar
  update(id: number, employee: Employee) {
    return this.httpClient.put(`${this.url}/${id}`, employee);
  }
  // Buscar por nombre
  buscarNombre(nombre: string) {
    return this.httpClient.get<Employee[]>(`${this.url}/buscar/nombre/${nombre}`);
  }

  // Buscar por apellido
  buscarApellido(apellido: string) {
    return this.httpClient.get<Employee[]>(`${this.url}/buscar/apellido/${apellido}`);
  }

  // Buscar por género
  buscarGenero(genero: string) {
    return this.httpClient.get<Employee[]>(`${this.url}/buscar/genero/${genero}`);
  }

  // Buscar por departamento
  buscarDepartamento(departamento: string) {
    return this.httpClient.get<Employee[]>(`${this.url}/buscar/departamento/${departamento}`);
  }

  // Métodos para manejar la lista local
  setList(listaNueva: Employee[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

}
