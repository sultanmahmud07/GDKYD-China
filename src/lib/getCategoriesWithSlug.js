import { BASEURL } from "../../Constant";

export default async function getCategoriesWithSlug() {
  try {
    const result = await fetch(`${BASEURL}/category/retrieve/skip-product`, {
      next: {
        revalidate: 5,
      },
    });

    if (!result.ok) {
      console.warn("Failed to fetch Categories data, status:", result.status);
      return { data: [] };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching Categories data in getCategoriesWithSlug:", error.message);
    return { data: [] };
  }
}
