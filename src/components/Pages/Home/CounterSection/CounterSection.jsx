import CounterSectionContent from "./CounterSectionContent"; 
// Import your background image here
import bgImage from "../../../../../public/assets/home-img/factory-bg.jpg"; // Change path to your real image

const CounterSection = () => {
  const countersData = [
    {
      name: "满意客户",
      countNumber: "12500 +"
    },
    {
      name: "完成项目",
      countNumber: "10500 +"
    },
    {
      name: "获得奖项",
      countNumber: "1000 +"
    },
    {
      name: "创作内容",
      countNumber: "1500 +"
    }
  ];

  return (
    <section id="CounterSection" className="relative w-full">
       <CounterSectionContent 
          title="一些数字"
          description="我们用数字讲述故事"
          counters={countersData}
          bgImage={bgImage} // Pass the image
       />
    </section>
  );
};

export default CounterSection;