import { BASEURL } from "../../Constant";

export default async function getPartners() {
  try {
    const result = await fetch(`${BASEURL}/partner/all`, {
      cache: "no-store",
    });

    if (!result.ok) {
      console.warn("Failed to fetch Partner data, status:", result.status);
      return { data: [] };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching Partner Data in getPartners:", error.message);
    return { data: [] };
  }
}