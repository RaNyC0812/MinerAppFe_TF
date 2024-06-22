import { Notification } from './notification'; // Ajusta la ruta según la ubicación de tu modelo

export class NotificationType {
  idNotiType: number = 0;
  severityLevel: string = "";
  notification: Notification = new Notification(); // Inicializamos notification
}
