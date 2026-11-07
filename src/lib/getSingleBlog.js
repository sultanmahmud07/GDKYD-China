import { BASEURL } from "../../Constant";

export default async function getSingleBlog(props) {
  try {
    const result = await fetch(`${BASEURL}/blog/slug/${props}`, {
      cache: "no-store",
    });

    if (!result.ok) {
      console.warn("Failed to fetch blog data, status:", result.status);
      return { data: {} };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching blog data in getSingleBlog:", error.message);
    return { data: {} };
  }
}