"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Order, OrderStatus } from "@/types/order-table";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Order>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: "Order ID",
    accessorKey: "id",
    cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
  },
  {
    header: "Table Number",
    accessorKey: "tableNumber",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("tableNumber")}</div>
    ),
  },
  {
    header: "orderItems",
    accessorKey: "Order Item",
    cell: ({ row }) => <div className="font-medium">Order Items</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      let status;

      if (row.getValue("status") === OrderStatus.ACTIVE) {
        status = <Badge>{row.getValue("status")}</Badge>;
      } else if (row.getValue("status") === OrderStatus.COMPLETED) {
        status = <Badge variant="success">{row.getValue("status")}</Badge>;
      } else if (row.getValue("status") === OrderStatus.CANCELLED) {
        status = <Badge variant="destructive">{row.getValue("status")}</Badge>;
      }
      return <div className="capitalize">{status}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
