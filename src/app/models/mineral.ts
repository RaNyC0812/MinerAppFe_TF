import { Mine } from './mine'; // Ajusta la ruta según la ubicación de tu modelo

export class Mineral {
  idMineral: number = 0;
  name: string = "";
  chemicalFormul: string = "";
  color: string = "";
  hardness: string = "";
  specificGravity: number = 0; // Usamos number en lugar de BigDecimal
  crystalSystem: string = "";
  fechaExtraccion: Date = new Date(Date.now()); // Usamos Date en lugar de LocalDate
  mine: Mine = new Mine(); // Inicializamos mine
}