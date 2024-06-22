import { Mine } from './mine'; // Ajusta la ruta según la ubicación de tu modelo
import { Employee } from './employee'; // Ajusta la ruta según la ubicación de tu modelo

export class Notification {
  idNotification: number = 0;
  dateTimeReceived: Date = new Date(Date.now()); // Usamos Date en lugar de LocalDate
  location: string = "";
  descripcion: string = "";
  actionTaken: string = "";
  responsiblePerson: string = "";
  currentStatus: string = "";
  mine: Mine = new Mine(); // Inicializamos mine
  employee: Employee = new Employee(); // Inicializamos employee
}
