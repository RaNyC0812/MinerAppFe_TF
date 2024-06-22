import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NotificationType } from '../models/notification-type';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class NotificationTypeService {
  private url = `${base_url}/notification-types`;
  private listaCambio = new Subject<NotificationType[]>();

  constructor(private httpClient: HttpClient) {}

  // Insertar
  insert(notificationType: NotificationType) {
    return this.httpClient.post(this.url, notificationType);
  }

  // Listar
  list() {
    return this.httpClient.get<NotificationType[]>(this.url);
  }

  // Eliminar
  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  // Listar por ID
  listId(id: number) {
    return this.httpClient.get<NotificationType>(`${this.url}/${id}`);
  }

  // Métodos para manejar la lista local
  setList(listaNueva: NotificationType[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

}
