import { Order, OrderStatus } from "@/types/order-table";
import { create } from "zustand";

type OrdersState = {
  orders: Order[];
};

export const mockOrders: Order[] = [
  {
    id: "ORD1000",
    tableNumber: "T11",
    orderItems: [
      { id: "item_2749581c", name: "Jeera Rice", quantity: 4, price: 180 },
      { id: "item_cbbae99d", name: "Veg Biryani", quantity: 1, price: 250 },
    ],
    amount: 970,
    status: OrderStatus.ACTIVE,
    waiters: [
      {
        id: "w4",
        name: "Sneha Gupta",
        contactNumber: "+91 65432 10987",
        userName: "sneha_g",
        avatar: "https://i.pravatar.cc/150?u=sneha",
      },
      {
        id: "w1",
        name: "Rahul Sharma",
        contactNumber: "+91 98765 43210",
        userName: "rahul_s",
        avatar: "https://i.pravatar.cc/150?u=rahul",
      },
    ],
    customerName: "Vikram Malhotra",
    totalItems: 5,
    createdAt: "2026-03-23T13:55:53.931Z",
    updatedAt: "2026-03-23T13:55:53.931Z",
  },
  {
    id: "ORD1001",
    tableNumber: "T10",
    orderItems: [
      { id: "item_75c7c96d", name: "Veg Biryani", quantity: 2, price: 250 },
      { id: "item_c189722d", name: "Paneer Tikka", quantity: 1, price: 280 },
      {
        id: "item_624b3ee3",
        name: "Naan",
        quantity: 4,
        price: 60,
        notes: "Extra gravy",
      },
    ],
    amount: 1020,
    status: OrderStatus.CANCELLED,
    waiters: [
      {
        id: "w3",
        name: "Amit Kumar",
        contactNumber: "+91 76543 21098",
        userName: "amit_k",
        avatar: "https://i.pravatar.cc/150?u=amit",
      },
      {
        id: "w2",
        name: "Priya Patel",
        contactNumber: "+91 87654 32109",
        userName: "priya_p",
        avatar: "https://i.pravatar.cc/150?u=priya",
      },
    ],
    customerName: "Rohan Kapoor",
    totalItems: 7,
    createdAt: "2026-03-25T11:55:53.932Z",
    updatedAt: "2026-03-26T05:55:53.932Z",
  },
  {
    id: "ORD1002",
    tableNumber: "T18",
    orderItems: [
      { id: "item_50c62440", name: "Chicken Biryani", quantity: 3, price: 320 },
      { id: "item_dca67f49", name: "Naan", quantity: 1, price: 60 },
      { id: "item_dcc6e473", name: "Naan", quantity: 1, price: 60 },
      { id: "item_42a1fa1d", name: "Chicken Biryani", quantity: 3, price: 320 },
    ],
    amount: 2040,
    status: OrderStatus.CANCELLED,
    waiters: [
      {
        id: "w1",
        name: "Rahul Sharma",
        contactNumber: "+91 98765 43210",
        userName: "rahul_s",
        avatar: "https://i.pravatar.cc/150?u=rahul",
      },
      {
        id: "w4",
        name: "Sneha Gupta",
        contactNumber: "+91 65432 10987",
        userName: "sneha_g",
        avatar: "https://i.pravatar.cc/150?u=sneha",
      },
    ],
    customerName: "Vikram Malhotra",
    totalItems: 8,
    createdAt: "2026-03-26T07:55:53.932Z",
    updatedAt: "2026-03-27T22:55:53.932Z",
  },
  {
    id: "ORD1003",
    tableNumber: "T9",
    orderItems: [
      { id: "item_5d9ec674", name: "Mango Lassi", quantity: 3, price: 90 },
      { id: "item_cec75f24", name: "Mango Lassi", quantity: 1, price: 90 },
    ],
    amount: 360,
    status: OrderStatus.CANCELLED,
    waiters: [
      {
        id: "w4",
        name: "Sneha Gupta",
        contactNumber: "+91 65432 10987",
        userName: "sneha_g",
        avatar: "https://i.pravatar.cc/150?u=sneha",
      },
      {
        id: "w1",
        name: "Rahul Sharma",
        contactNumber: "+91 98765 43210",
        userName: "rahul_s",
        avatar: "https://i.pravatar.cc/150?u=rahul",
      },
    ],
    customerName: "Vikram Malhotra",
    totalItems: 4,
    createdAt: "2026-03-29T03:55:53.932Z",
    updatedAt: "2026-03-29T06:55:53.932Z",
  },
  {
    id: "ORD1004",
    tableNumber: "T5",
    orderItems: [
      { id: "item_bc74a007", name: "Dal Makhani", quantity: 4, price: 220 },
      { id: "item_83c13376", name: "Dal Makhani", quantity: 2, price: 220 },
      { id: "item_5ffc481a", name: "Mango Lassi", quantity: 2, price: 90 },
    ],
    amount: 1500,
    status: OrderStatus.ACTIVE,
    waiters: [
      {
        id: "w4",
        name: "Sneha Gupta",
        contactNumber: "+91 65432 10987",
        userName: "sneha_g",
        avatar: "https://i.pravatar.cc/150?u=sneha",
      },
      {
        id: "w2",
        name: "Priya Patel",
        contactNumber: "+91 87654 32109",
        userName: "priya_p",
        avatar: "https://i.pravatar.cc/150?u=priya",
      },
    ],
    totalItems: 8,
    createdAt: "2026-03-29T03:55:53.932Z",
    updatedAt: "2026-03-29T03:55:53.932Z",
  },
  {
    id: "ORD1005",
    tableNumber: "T18",
    orderItems: [
      { id: "item_13ba3e00", name: "Butter Chicken", quantity: 2, price: 320 },
      { id: "item_75aee588", name: "Masala Dosa", quantity: 4, price: 140 },
    ],
    amount: 1200,
    status: OrderStatus.COMPLETED,
    waiters: [
      {
        id: "w2",
        name: "Priya Patel",
        contactNumber: "+91 87654 32109",
        userName: "priya_p",
        avatar: "https://i.pravatar.cc/150?u=priya",
      },
    ],
    customerName: "Rohan Kapoor",
    totalItems: 6,
    createdAt: "2026-03-26T00:55:53.932Z",
    updatedAt: "2026-03-26T07:55:53.932Z",
  },
  {
    id: "ORD1006",
    tableNumber: "T15",
    orderItems: [
      { id: "item_2babf60d", name: "Jeera Rice", quantity: 4, price: 180 },
      { id: "item_4a8be789", name: "Veg Biryani", quantity: 4, price: 250 },
      {
        id: "item_35052497",
        name: "Veg Biryani",
        quantity: 2,
        price: 250,
        notes: "No onion",
      },
    ],
    amount: 2220,
    status: OrderStatus.ACTIVE,
    waiters: [
      {
        id: "w1",
        name: "Rahul Sharma",
        contactNumber: "+91 98765 43210",
        userName: "rahul_s",
        avatar: "https://i.pravatar.cc/150?u=rahul",
      },
    ],
    customerName: "Meera Sharma",
    totalItems: 10,
    createdAt: "2026-03-22T15:55:53.932Z",
    updatedAt: "2026-03-22T15:55:53.932Z",
  },
  {
    id: "ORD1007",
    tableNumber: "T4",
    orderItems: [
      { id: "item_55564692", name: "Butter Chicken", quantity: 1, price: 320 },
      { id: "item_80b76050", name: "Mango Lassi", quantity: 1, price: 90 },
      { id: "item_5e397122", name: "Jeera Rice", quantity: 4, price: 180 },
      {
        id: "item_35a9c1ae",
        name: "Veg Biryani",
        quantity: 4,
        price: 250,
        notes: "No onion",
      },
      { id: "item_06f7ff75", name: "Butter Chicken", quantity: 4, price: 320 },
      { id: "item_cf982f22", name: "Jeera Rice", quantity: 1, price: 180 },
    ],
    amount: 3590,
    status: OrderStatus.COMPLETED,
    waiters: [
      {
        id: "w3",
        name: "Amit Kumar",
        contactNumber: "+91 76543 21098",
        userName: "amit_k",
        avatar: "https://i.pravatar.cc/150?u=amit",
      },
    ],
    totalItems: 15,
    createdAt: "2026-03-24T14:55:53.932Z",
    updatedAt: "2026-03-26T06:55:53.932Z",
  },
];

export const useOrdersStore = create<OrdersState>()((set, get) => ({
  orders: mockOrders,
}));
