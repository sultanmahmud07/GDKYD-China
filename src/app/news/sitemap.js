import { BASEURL } from "../../../Constant";

export const dynamic = "force-dynamic";

// Function to fetch products from your API
async function getNews() {
  try {
    const result = await fetch(`${BASEURL}/blog/all`);

    if (!result.ok) {
      console.error("Failed to fetch news for sitemap, status:", result.status);
      return [];
    }
    const data = await result.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching news for sitemap:", error);
    return [];
  }
}

// Generate the sitemap
export default async function sitemap() {
  const list = await getNews();

  return list
    .filter((news) => (news?.slug || news?.id) && (news?.slug || news?.id) !== "undefined")
    .map((news) => ({
      url: `https://gdkyd.com/news/${news.slug || news.id}`,
      // lastModified: product?.createdAt,
    }));
}