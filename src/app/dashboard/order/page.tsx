import PageContainer from "@/components/layout/page-container";
import { productInfoContent } from "@/config/infoconfig";

export default function Page() {
  return (
    <PageContainer
      scrollable={false}
      pageTitle="Orders"
      pageDescription="View and manage all your orders."
      infoContent={productInfoContent}
    >
      Order List here
    </PageContainer>
  );
}
