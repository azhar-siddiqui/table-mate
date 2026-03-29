import { mockOrders } from "../utils/store";
import { OrderTable } from "./order-tables";
import { columns } from "./order-tables/columns";

export default function OrderListingPage() {
  return (
    <OrderTable
      data={mockOrders}
      totalItems={mockOrders.length}
      columns={columns}
    />
  );
}
