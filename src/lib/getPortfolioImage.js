import { BASEURL } from "../../Constant";

export default async function getPortfolioImage() {
  try {
    const result = await fetch(`${BASEURL}/portfolio/all`);

    if (!result.ok) {
      console.warn("Failed to fetch Portfolio Image, status:", result.status);
      return { data: [] };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching Portfolio Image in getPortfolioImage:", error.message);
    return { data: [] };
  }
}