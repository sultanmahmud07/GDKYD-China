import ContactBox from "../../components/Pages/Contact/ContactUsBox/ContactBox";
import MapLocation from "../../components/Pages/Contact/MapLocation/MapLocation";
import Subscribe from "../../components/Pages/Contact/Subscribe/Subscribe";
import ShareBanner from "../../components/Shared/ShareBanner/ShareBanner";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getBanners from "../../lib/getBanner";
import { BASEURL } from "../../../Constant";
export const metadata = {
  title: "联系快裕达 | 无纺布医疗设备与防护用品制造解决方案",
  description: "联系快裕达精密机械获取无纺布医疗设备、生产制造解决方案和行业领先的设备信息。欢迎随时垂询，我们将为您提供专业的支持与商务合作。"
};
export default async function Page() {
  const banner = await getBanners("contact_us")
  
  return (
    <div className="">
      <TopGap></TopGap>
      <ShareBanner
        bannerBg={`${banner?.data?.banner_image}`}
        title={banner?.data?.title_cn
        }
        des={banner?.data?.description_cn
        } link={"contact"}
      ></ShareBanner>
      <ContactBox></ContactBox>
      <MapLocation></MapLocation>
      <Subscribe></Subscribe>
    </div>
  );
}
