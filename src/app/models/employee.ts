import { Mine } from './mine'; // Ajusta la ruta según la ubicación de tu modelo

export class Employee {
  employeeId: number = 0;
  firstName: string = "";
  lastName: string = "";
  dateBirth: Date | null = null; // Usamos Date en lugar de LocalDate
  gender: string = "";
  hireDate: Date | null = null; // Usamos Date en lugar de LocalDate
  department: string = "";
  jobTitle: string = "";
  salary: number = 0;
  contactInfo: string = ""; // Corregido el typo
  address: string = "";
  emergencyContact: string = "";
  mine: Mine = new Mine(); // Inicializamos mine
}