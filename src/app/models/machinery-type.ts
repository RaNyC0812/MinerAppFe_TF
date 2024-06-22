import { Machinery } from './machinery'; // Ajusta la ruta según la ubicación de tu modelo

export class MachineryType {
  idMachineryType: number = 0;
  machineryTypeName: string = "";
  description: string = "";
  generalUses: string = "";
  machinery: Machinery = new Machinery(); // Inicializamos machinery
}
