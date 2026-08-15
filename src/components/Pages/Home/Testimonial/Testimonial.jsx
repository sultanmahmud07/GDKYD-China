import img1 from "../../../../../public/assets/home-img/testimonial-img/client-img.jpg";
import img2 from "../../../../../public/assets/home-img/testimonial-img/client-img.jpg";
import img3 from "../../../../../public/assets/home-img/testimonial-img/client-img.jpg";
import img4 from "../../../../../public/assets/home-img/testimonial-img/client-img.jpg";
import img5 from "../../../../../public/assets/home-img/testimonial-img/client-img.jpg";
import TestimonialSlider from "./TestimonialSlider";

const ClientTestimonial = () => {
  const keys = ['testimonial1', 'testimonial2', 'testimonial3', "testimonial4", "testimonial5"];
  const images = [img1, img2, img3, img4, img5];

  return (
    <TestimonialSlider
      images={images}
      keys={keys}
      title="听听客户对我们的机械解决方案的满意程度"
      description="听听我们满意的客户和客户的反馈。"
    ></TestimonialSlider>
  );
};

export default ClientTestimonial;
