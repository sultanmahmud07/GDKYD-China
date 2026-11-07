import { BASEURL } from "../../Constant";

export default async function getSpecificProduct(props) {
  try {
    const result = await fetch(`${BASEURL}/product/slug/${props}`, {
      cache: "no-store",
    });

    if (!result.ok) {
      console.warn("Failed to fetch product data, status:", result.status);
      return { data: {} };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching product data in getSpecificProduct:", error.message);
    return { data: {} };
  }
}