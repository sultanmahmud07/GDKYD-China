import { BASEURL } from "../../Constant";

export default async function getHonors() {
  try {
    const result = await fetch(`${BASEURL}/honor/all`, {
      next: {
        revalidate: 5,
      },
    });

    if (!result.ok) {
      console.warn("Failed to fetch Honor data, status:", result.status);
      return { data: [] };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching Honor data in getHonors:", error.message);
    return { data: [] };
  }
}