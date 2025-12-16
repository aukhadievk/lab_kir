export class SportsEquipment {
  id: number;
  name: string;           // "Роликовые коньки", "Велосипед горный"
  type: 'roller' | 'bicycle' | 'skateboard'; // Тип инвентаря
  brand: string;          // Марка
  size: string;           // Размер (для роликов/коньков)
  condition: 'excellent' | 'good' | 'satisfactory'; // Состояние
  hourlyRate: number;     // Стоимость аренды в час
  isAvailable: boolean;   // Доступен для аренды
}