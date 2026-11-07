import { BASEURL } from "../../Constant";

export default async function getTeamMember(props) {
  try {
    const result = await fetch(`${BASEURL}/our-team/${props}`, {
      cache: "no-store",
    });

    if (!result.ok) {
      console.warn("Failed to fetch team member, status:", result.status);
      return { data: {} };
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching team member in getTeamMember:", error.message);
    return { data: {} };
  }
}