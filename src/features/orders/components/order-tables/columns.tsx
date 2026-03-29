"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Order, OrderItem, OrderStatus } from "@/types/order-table";
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
    maxSize: 50,
  },
  {
    header: "Order ID",
    accessorKey: "id",
    cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
    enableHiding: false,
    maxSize: 150,
  },
  {
    header: "Table Number",
    accessorKey: "tableNumber",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("tableNumber")}</div>
    ),
    maxSize: 150,
  },
  {
    header: "Order Items",
    accessorKey: "orderItems",
    cell: ({ row }) => {
      const orderItems = row.getValue("orderItems") as OrderItem[];

      if (!Array.isArray(orderItems) || orderItems.length === 0) {
        return <div className="text-muted-foreground">-</div>;
      }

      // Join all item names with comma
      const itemNames = orderItems.map((item) => item.name).join(", ");
      return <div>{itemNames}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
    maxSize: 550,
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
    maxSize: 150,
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
    maxSize: 50,
  },
];
