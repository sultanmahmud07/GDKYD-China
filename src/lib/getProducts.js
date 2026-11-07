import { BASEURL } from "../../Constant";

export default async function getProducts(searchParams, slug) {
    const params = new URLSearchParams();

    // ✅ Required: Always include page and limit (with default values if not set)
    params.set("page", searchParams?.page || "1");
    params.set("limit", searchParams?.limit || "9");
    // params.set("viewOnHomepage", searchParams?.viewOnHomepage || "false");

    // ✅ Optional query filters
    if (slug) params.set("category", slug);
    if (searchParams?.viewOnHomepage) params.set("viewOnHomepage", searchParams?.viewOnHomepage);

    // ✅ Optional query filters
    if (searchParams?.category) params.set("category", searchParams.category);
  try {
    const result = await fetch(
      `${BASEURL}/product/all?${params.toString()}`,
      {
        cache: "no-store",
      }
    );

    if (!result.ok) {
      console.warn("Failed to fetch all Product Data, status:", result.status);
      return { data: { data: [] } };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching all Product Data in getProducts:", error.message);
    return { data: { data: [] } };
  }
}