// enums/status.ts
export enum OrderStatus {
  ACTIVE = "ACTIVE",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
}

// types/order.ts

export interface OrderItem {
  id: string;
  name: string; // Better than 'item'
  quantity: number; // Usually useful
  price: number; // Helpful for calculations
  notes?: string;
}

export interface Waiter {
  id: string;
  name: string;
  contactNumber: string;
  userName?: string;
  avatar?: string;
}

export interface Order {
  id: string;
  tableNumber: string;
  orderItems: OrderItem[];
  amount: number;
  status: OrderStatus;
  waiters: Waiter[];
  customerName?: string;
  totalItems?: number;
  createdAt?: Date | string; // Very useful
  updatedAt?: Date | string;
}
