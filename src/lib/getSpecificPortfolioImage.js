import { BASEURL } from "../../Constant";

export default async function getSpecificPortfolioImage(props) {
  try {
    const result = await fetch(`${BASEURL}/portfolio/slug/${props}`, {
      cache: "no-store",
    });

    if (!result.ok) {
      console.warn("Failed to fetch Portfolio Image Data, status:", result.status);
      return { data: {} };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching Portfolio Image Data in getSpecificPortfolioImage:", error.message);
    return { data: {} };
  }
}