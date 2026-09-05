import { BASEURL } from "../../../Constant";

export const dynamic = "force-dynamic";

// Function to fetch portfolio items from your API
async function getPortfolio() {
  try {
    const result = await fetch(`${BASEURL}/portfolio/all`);

    if (!result.ok) {
      console.error("Failed to fetch portfolio items for sitemap, status:", result.status);
      return [];
    }
    const data = await result.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching portfolio items for sitemap:", error);
    return [];
  }
}

// Generate the sitemap
export default async function sitemap() {
  const list = await getPortfolio();

  return list
    .filter((portfolio) => portfolio?.slug && portfolio?.slug !== "undefined")
    .map((portfolio) => ({
      url: `http://gdkyd.com.cn/portfolio/${portfolio.slug}`,
      // lastModified: product?.createdAt,
    }));
}