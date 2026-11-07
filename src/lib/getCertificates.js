import { BASEURL } from "../../Constant";

export default async function getCertificates() {
  try {
    const result = await fetch(`${BASEURL}/certificate/all`, {
      cache: "no-store",
    });

    if (!result.ok) {
      console.warn("Failed to fetch certificates, status:", result.status);
      return { data: [] };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching certificates in getCertificates:", error.message);
    return { data: [] };
  }
}