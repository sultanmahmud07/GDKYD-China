import FindProductsContent from "./FindProductsContent";
// Import a background image (e.g., a photo of your factory or machine)
import ctaBg from "../../../../public/assets/home-img/factory-bg.jpg"; // Update this path

const FindProducts = () => {
  
  return (
    <FindProductsContent 
      title={"找到价格和品质都让您满意的生产利器，为您的工厂添一把力"}
      description={"超过 110 个国家的客户——让我们找到适合您的产品！"}
      buttonText={"浏览产品"}
      bgImage={ctaBg} // Pass the image
    />
  );
};

export default FindProducts;