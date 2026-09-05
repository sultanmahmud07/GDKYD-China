import { BASEURL } from "../../../Constant";

export const dynamic = "force-dynamic";

// Function to fetch categories from your API
async function getCategories() {
  try {
    const result = await fetch(`${BASEURL}/category/retrieve/for-sitemap`);

    if (!result.ok) {
      console.error("Failed to fetch categories for sitemap, status:", result.status);
      return [];
    }
    const data = await result.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching categories for sitemap:", error);
    return [];
  }
}

// Generate the sitemap
export default async function sitemap() {
  const list = await getCategories();

  return list
    .filter((category) => category?.slug && category?.slug !== "undefined")
    .map((category) => ({
      url: `http://gdkyd.com.cn/category/${category.slug}`,
      // lastModified: category?.createdAt,
    }));
}