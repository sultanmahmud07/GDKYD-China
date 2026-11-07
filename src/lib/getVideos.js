import { BASEURL } from "../../Constant";

export default async function getVideos() {
  try {
    const result = await fetch(`${BASEURL}/video/all`, {
      next: {
        revalidate: 5,
      },
    });

    if (!result.ok) {
      console.warn("Failed to fetch Videos, status:", result.status);
      return { data: [] };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching Videos in getVideos:", error.message);
    return { data: [] };
  }
}