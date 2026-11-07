import { BASEURL } from "../../Constant";

export default async function getAddBlogs() {
  try {
    const result = await fetch(`${BASEURL}/blog/all`, {
      next: {
        revalidate: 5,
      },
    });

    if (!result.ok) {
      console.warn("Failed to fetch Blogs data, status:", result.status);
      return { data: [] };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching Blogs data in getAllBlogs:", error.message);
    return { data: [] };
  }
}