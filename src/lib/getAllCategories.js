import { BASEURL } from "../../Constant";

export default async function getAllCategories() {
  try {
    const result = await fetch(`${BASEURL}/category/all`, {
      next: {
        revalidate: 5,
      },
    });

    if (!result.ok) {
      console.warn("Failed to fetch categories data, status:", result.status);
      return { data: [] };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching Categories data in getAllCategories:", error.message);
    return { data: [] };
  }
}
