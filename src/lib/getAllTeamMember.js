import { BASEURL } from "../../Constant";

export default async function getAllTeamMember() {
  try {
    const result = await fetch(`${BASEURL}/our-team/all`, {
      cache: "no-store",
    });

    if (!result.ok) {
      console.warn("Failed to fetch team members, status:", result.status);
      return { data: [] };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching team members in getAllTeamMember:", error.message);
    return { data: [] };
  }
}