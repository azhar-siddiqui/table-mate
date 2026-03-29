import PageContainer from "@/components/layout/page-container";
import { productInfoContent } from "@/config/infoconfig";
import OrderListingPage from "@/features/orders/components/order-listing";
import { searchParamsCache } from "@/lib/searchparams";
import { SearchParams } from "nuqs/server";

export const metadata = {
  title: "Dashboard: Orders",
};

type PageProps = {
  searchParams: Promise<SearchParams>;
};
export default async function Page(props: Readonly<PageProps>) {
  const searchParams = await props.searchParams;
  searchParamsCache.parse(searchParams);
  return (
    <PageContainer
      scrollable={false}
      pageTitle="Orders"
      pageDescription="View and manage all your orders."
      infoContent={productInfoContent}
    >
      <OrderListingPage />
    </PageContainer>
  );
}
