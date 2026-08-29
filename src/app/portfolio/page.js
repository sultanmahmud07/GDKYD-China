import FindProducts from "../../components/Shared/FindProducts/FindProducts";
import ShareBanner from "../../components/Shared/ShareBanner/ShareBanner";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getBanners from "../../lib/getBanner"
import VideoPortfolio from "../../components/Pages/Portfolios/VideoPortfolio/VideoPortfolio";
import getVideos from "../../lib/getVideos";
import getHonors from "../../lib/getHonors";
import ImagePortfolio from "../../components/Pages/Portfolios/ImagePortfolio/ImagePortfolio";
import Honor from "../../components/Pages/Portfolios/Honor/Honor";

export const metadata = {
  title: "案例展示 | 精密机械与医疗设备制造",
  description: "探索广东快裕达精密机械的专业案例展示。了解我们创新的生产制造解决方案、产品设计、自动化技术和工程实力。深受全球客户信赖。"
};
export default async function Page() {
  const banner = await getBanners("portfolio")
  const honorsData = await getHonors();
  const videos = await getVideos();
    return (
    <div className="">
      <TopGap></TopGap>
      <ShareBanner
        bannerBg={`${banner?.data?.banner_image}`}
        title={banner?.data?.title_cn
        }
        des={banner?.data?.description_cn
        }
        link={"portfolio"}
      ></ShareBanner>
      <ImagePortfolio></ImagePortfolio>
      <VideoPortfolio videos={videos?.data}></VideoPortfolio>
      <Honor honors={honorsData?.data}></Honor>
      <FindProducts></FindProducts>
    </div>
  );
}
