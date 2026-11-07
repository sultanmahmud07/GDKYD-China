import { BASEURL } from "../../Constant";

export default async function getCategoryBySlug(props) {
  try {
    const result = await fetch(`${BASEURL}/category/slug/${props}`, {
      cache: "no-store",
    });

    if (!result.ok) {
      console.warn("Failed to fetch category data, status:", result.status);
      return { data: {} };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching category data in getCategoryBySlug:", error.message);
    return { data: {} };
  }
}