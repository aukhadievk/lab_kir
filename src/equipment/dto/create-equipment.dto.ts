export class CreateEquipmentDto {
  name: string;
  type: string;
  brand: string;
  size?: string;
  condition: string;
  hourlyRate: number;
  isAvailable: boolean;
}