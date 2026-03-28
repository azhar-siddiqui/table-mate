"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { productByIdOptions } from "../api/queries";
import type { Product } from "../api/types";
import ProductForm from "./product-form";

type TProductViewPageProps = {
  productId: string;
};

export default function ProductViewPage({
  productId,
}: Readonly<TProductViewPageProps>) {
  if (productId === "new") {
    return <ProductForm initialData={null} pageTitle="Create New Product" />;
  }

  return <EditProductView productId={Number(productId)} />;
}

function EditProductView({ productId }: { readonly productId: number }) {
  const { data } = useSuspenseQuery(productByIdOptions(productId));

  if (!data?.success || !data?.product) {
    notFound();
  }

  return (
    <ProductForm
      initialData={data.product as Product}
      pageTitle="Edit Product"
    />
  );
}
