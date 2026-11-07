import { BASEURL } from "../../Constant";

export default async function getHomeBannerData() {
  try {
    const result = await fetch(`${BASEURL}/hero/retrive/all`, {
      next: {
        revalidate: 5,
      },
    });

    if (!result.ok) {
      console.warn("Failed to fetch Home Banner data, status:", result.status);
      return { data: [] };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching Home Banner data in getHomeBannerData:", error.message);
    return { data: [] };
  }
}