import BlogShow from "../../components/Pages/Blog/BlogShow/BlogShow";
import GetInTouch from "../../components/Shared/GetInTouch/GetInTouch";
import Subscribe from "../../components/Pages/Contact/Subscribe/Subscribe";
import BlogBanner from "../../components/Pages/Blog/BlogBanner/BlogBanner";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getAllBlogs from "../../lib/getAllBlogs"
import getBanners from "../../lib/getBanner"
export const metadata = {
  title: "新闻资讯 | 口罩机与无纺布医疗设备制造行业动态",
  description: "为您带来无纺布医疗设备制造、行业趋势和技术创新的最新见解。获取关于快裕达精密机械的新闻动态、技术指南以及先进的生产解决方案。"
};
export default async function Page() {
  const blogsData = await getAllBlogs()
  const banner = await getBanners("blog")
    // console.log("blogsData:", blogsData.data)
  return (
    <div className="">
      <TopGap></TopGap>
     <BlogBanner banner={banner?.data}></BlogBanner>
      <BlogShow blogs={blogsData.data}></BlogShow>
      <GetInTouch></GetInTouch>
      <Subscribe></Subscribe>
    </div>
  );
}
