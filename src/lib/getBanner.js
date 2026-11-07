import { BASEURL } from "../../Constant";

export default async function getBanners(props) {
  try {
    const result = await fetch(`${BASEURL}/web-banner/${props}`, {
      next: {
        revalidate: 5,
      },
    });

    if (!result.ok) {
      console.warn("Failed to fetch Banner, status:", result.status);
      return { data: {} };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching Banner in getBanner:", error.message);
    return { data: {} };
  }
}