import FacilitiesContent from "./FacilitiesContent";

// Import your images
import img1 from "../../../../../public/assets/about-img/facilities/1.png";
import img2 from "../../../../../public/assets/about-img/facilities/2.png";
import img3 from "../../../../../public/assets/about-img/facilities/3.png";
import img4 from "../../../../../public/assets/about-img/facilities/4.png";

const Facilities = () => {
  const itemsData = [
    {
      image: img1,
      title: "制造商"
    },
    {
      image: img2,
      title: "质量保证"
    },
    {
      image: img3,
      title: "短周期交付"
    },
    {
      image: img4,
      title: "成本有效"
    }
  ];

  return (
    <FacilitiesContent 
      title="设施"
      items={itemsData}
    />
  );
};

export default Facilities;