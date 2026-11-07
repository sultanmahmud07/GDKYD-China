import { BASEURL } from "../../Constant";

export default async function getSpecificCategory(props) {
  try {
    const result = await fetch(`${BASEURL}/category/${props}`, {
      cache: "no-store",
    });

    if (!result.ok) {
      console.warn("Failed to fetch Category Data, status:", result.status);
      return { data: {} };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching Category Data in getSpecificCategory:", error.message);
    return { data: {} };
  }
}