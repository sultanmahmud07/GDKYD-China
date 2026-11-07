import { BASEURL } from "../../Constant";

export default async function getHomePageData() {
  try {
    const result = await fetch(`${BASEURL}/web-home`, {
      next: {
        revalidate: 5,
      },
    });

    if (!result.ok) {
      console.warn("Failed to fetch Home page data, status:", result.status);
      return { data: {} };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching Home page data in getHomePageData:", error.message);
    return { data: {} };
  }
}