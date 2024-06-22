import { Mine } from './mine'; // Ajusta la ruta según la ubicación de tu modelo

export class Machinery {
  idMachinery: number = 0;
  name: string = "";
  manufacturer: string = "";
  model: string = "";
  serialNumber: string = "";
  purchaseDate: Date = new Date(Date.now()); // Usamos Date en lugar de LocalDate
  operationalStat: string = "";
  mine: Mine = new Mine(); // Inicializamos mine
}
