import { OrderStatus } from "@/types/order-table";

export const orders = Array.from({ length: 50 }, (_, i) => {
  const idNum = 1000 + i;

  const tables = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"];

  const dishes = [
    { name: "Butter Chicken", price: 320 },
    { name: "Paneer Butter Masala", price: 280 },
    { name: "Veg Biryani", price: 250 },
    { name: "Chicken Biryani", price: 260 },
    { name: "Jeera Rice", price: 180 },
    { name: "Dal Tadka", price: 150 },
    { name: "Tandoori Roti", price: 25 },
    { name: "Masala Papad", price: 60 },
    { name: "Cold Coffee", price: 120 },
    { name: "Mango Lassi", price: 90 },
  ];

  const statusList = [
    OrderStatus.ACTIVE,
    OrderStatus.CANCELLED,
    OrderStatus.COMPLETED,
  ];

  const randomItems = Array.from(
    { length: Math.floor(Math.random() * 5) + 2 },
    () => {
      const dish = dishes[Math.floor(Math.random() * dishes.length)];
      const quantity = Math.floor(Math.random() * 4) + 1;

      return {
        id: `item_${Math.random().toString(16).slice(2, 10)}`,
        name: dish.name,
        quantity,
        price: dish.price,
        notes: Math.random() > 0.7 ? "Less spicy" : undefined,
      };
    },
  );

  const totalAmount = randomItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return {
    id: `ORD${idNum}`,
    tableNumber: tables[Math.floor(Math.random() * tables.length)],
    orderItems: randomItems,
    amount: totalAmount,
    status: statusList[Math.floor(Math.random() * statusList.length)],
    waiters: [
      {
        id: `w${Math.floor(Math.random() * 5) + 1}`,
        name: ["Amit", "Rahul", "Suresh", "Vikas", "Rohit"][
          Math.floor(Math.random() * 5)
        ],
        contactNumber: `+91 9${Math.floor(
          100000000 + Math.random() * 900000000,
        )}`,
        userName: `waiter_${i}`,
        avatar: `https://i.pravatar.cc/150?u=waiter${i}`,
      },
    ],
    customerName:
      Math.random() > 0.5
        ? ["Raj", "Simran", "Arjun", "Neha", "Karan"][
            Math.floor(Math.random() * 5)
          ]
        : undefined,
    totalItems: randomItems.reduce((acc, item) => acc + item.quantity, 0),
    createdAt: new Date(Date.now() - Math.random() * 1e10).toISOString(),
    updatedAt: new Date().toISOString(),
  };
});
