export class Rental {
  id: number;
  renterId: number;           // ID арендатора
  equipmentId: number;        // ID инвентаря
  startDate: Date;           // Дата начала аренды
  endDate: Date;             // Дата окончания аренды
  hours: number;             // Количество часов
  totalCost: number;         // Общая стоимость
  status: 'active' | 'completed' | 'cancelled'; // Статус аренды
  depositPaid: boolean;      // Залог оплачен
}