import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private url = `${base_url}/notifications`;
  private listaCambio = new Subject<Notification[]>();

  constructor(private httpClient: HttpClient) {}

  // Insertar
  insert(notification: Notification) {
    return this.httpClient.post(this.url, notification);
  }

  // Listar
  list() {
    return this.httpClient.get<Notification[]>(this.url);
  }

  // Eliminar
  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  // Listar por ID
  listId(id: number) {
    return this.httpClient.get<Notification>(`${this.url}/${id}`);
  }

  // Contar notificaciones por mina
  getNotificationCountByMine() {
    return this.httpClient.get<Object[]>(`${this.url}/count/mine`);
  }

  // Buscar por estado
  search(estado: string) {
    return this.httpClient.get<Notification[]>(`${this.url}/buscar/${estado}`);
  }

  // Buscar notificaciones por rango de fechas
  findNotificationsByDateRange(startDate: string, endDate: string) {
    return this.httpClient.get<Notification[]>(`${this.url}/buscar/rango-fechas`, {
      params: { startDate, endDate }
    });
  }

  // Contar notificaciones por empleado
  countNotificationsByEmployee() {
    return this.httpClient.get<Object[]>(`${this.url}/count/employee`);
  }

  // Buscar notificaciones por empleado
  findNotificationsByEmployee(employeeName: string) {
    return this.httpClient.get<Notification[]>(`${this.url}/buscar/empleado/${employeeName}`);
  }

  // Buscar notificaciones por mina
  findNotificationsByMine(mineName: string) {
    return this.httpClient.get<Notification[]>(`${this.url}/buscar/mina/${mineName}`);
  }

  // Métodos para manejar la lista local
  setList(listaNueva: Notification[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
