import { BASEURL } from "../../../Constant";

export const dynamic = "force-dynamic";

// Function to fetch products from your API
async function getProducts() {
  try {
    const result = await fetch(`${BASEURL}/product/retrieve/for-sitemap`);

    if (!result.ok) {
      console.error("Failed to fetch products for sitemap, status:", result.status);
      return [];
    }
    const data = await result.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching products for sitemap:", error);
    return [];
  }
}

// Generate the sitemap
export default async function sitemap() {
  const list = await getProducts();

  return list
    .filter((product) => product?.slug && product?.slug !== "undefined")
    .map((product) => ({
      url: `https://gdkyd.com/product/${product.slug}`,
      // lastModified: product?.createdAt,
    }));
}