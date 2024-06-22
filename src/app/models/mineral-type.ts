import { Mineral } from './mineral'; // Ajusta la ruta según la ubicación de tu modelo

export class MineralType {
  idMineralType: number = 0;
  type: string = "";
  generalPropertie: string = "";
  mineral: Mineral = new Mineral(); // Inicializamos mineral
}
