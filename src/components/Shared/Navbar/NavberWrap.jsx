import Navbar from "./Navbar";
import getAllCategories from "../../../lib/getAllCategories";

const NavbarWrap = async () => {
  try {
    const allCategories = await getAllCategories();
    return <Navbar allCategories={allCategories?.data || []}></Navbar>;
  } catch (error) {
    console.error("NavbarWrap error:", error);
    return <Navbar allCategories={[]}></Navbar>;
  }
};

export default NavbarWrap;
