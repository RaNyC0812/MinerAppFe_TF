import { Machinery } from './machinery'; // Ajusta la ruta según la ubicación de tu modelo

export class Maintenance {
  idMaintenance: number = 0;
  maintenanceDate: Date = new Date(Date.now()); // Usamos Date en lugar de LocalDate
  performedBy: string = "";
  description: string = "";
  maintenanceType: string = "";
  cost: number = 0; // Usamos number en lugar de BigDecimal
  nextMaintenance: Date = new Date(Date.now()); // Usamos Date en lugar de LocalDate
  machinery: Machinery = new Machinery(); // Inicializamos machinery
}