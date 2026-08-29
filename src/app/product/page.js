import ServiceFAQ from "../../components/Pages/Servces/ServiceFAQ/ServiceFAQ";
import MachinesCenter from "../../components/Pages/Servces/MachinsCenter/MachinsCenter";
import ServiceBannerWrapper from "../../components/Pages/Servces/ServiceBanner/ServiceBannerWraper";
import ProductsPageLayout from "../../components/Pages/Products/ProductsPageLayout";
import WintechStandard from "../../components/Pages/Servces/WintechStandard/WintechStandard";
import GetInTouch from "../../components/Shared/GetInTouch/GetInTouch";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getBanners from "../../lib/getBanner"

export const metadata = {
  title: "医疗防护与口罩机制造设备产品列表 | 快裕达",
  description: "快裕达制造并供应医用设备、口罩机、无纺布制品深加工设备、包装机及日化护理生产线。通过ISO 13485认证。欢迎联系我们获取最新设备报价。"
};
export default async function Page({searchParams}) {
  const banner = await getBanners("services")
   const filters = (await searchParams) || {};
//  console.log("Filter: ", filters)
  return (
    <div className="">
      <TopGap></TopGap>
      <ServiceBannerWrapper banner={banner?.data}></ServiceBannerWrapper>
      <ProductsPageLayout searchParams={filters}></ProductsPageLayout>
      <WintechStandard></WintechStandard>
      <MachinesCenter></MachinesCenter>
      <ServiceFAQ></ServiceFAQ>
      <GetInTouch></GetInTouch>
    </div>
  );
}
