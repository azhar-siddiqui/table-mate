import { Icons } from "@/components/icons";
import PageContainer from "@/components/layout/page-container";
import { buttonVariants } from "@/components/ui/button";
import { productInfoContent } from "@/config/infoconfig";
import ProductListingPage from "@/features/products/components/product-listing";
import { searchParamsCache } from "@/lib/searchparams";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SearchParams } from "nuqs/server";

export const metadata = {
  title: "Dashboard: Products",
};

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Page(props: Readonly<pageProps>) {
  const searchParams = await props.searchParams;
  searchParamsCache.parse(searchParams);

  return (
    <PageContainer
      scrollable={false}
      pageTitle="Products"
      pageDescription="Manage products (React Query + nuqs table pattern.)"
      infoContent={productInfoContent}
      pageHeaderAction={
        <Link
          href="/dashboard/product/new"
          className={cn(buttonVariants(), "text-xs md:text-sm")}
        >
          <Icons.add className="mr-2 h-4 w-4" /> Add New
        </Link>
      }
    >
      <ProductListingPage />
    </PageContainer>
  );
}
