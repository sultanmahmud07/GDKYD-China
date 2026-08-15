import React from 'react';
import WhyChooseUsContent from "./WhyChooseUsContent"; 
// Images
import img1 from "../../../../../public/assets/home-img/why-chose-us/Commitment.svg";
import img2 from "../../../../../public/assets/home-img/why-chose-us/Advanced-Technology.svg";
import img3 from "../../../../../public/assets/home-img/why-chose-us/Expertise.svg";
import img4 from "../../../../../public/assets/home-img/why-chose-us/Tailored-Solutions.svg";
import img5 from "../../../../../public/assets/home-img/why-chose-us/Responsive-Transparent.svg";
import img6 from "../../../../../public/assets/home-img/why-chose-us/Cost-Effective.svg";

const WhyChooseUs = () => {
  const featuresData = [
    {
      id: 0,
      image: img1,
      title: "为您的需求量身定制的解决方案 ",
      description: "我们设计定制机械，以满足您的特定业务需求，确保每个生产周期都具有高精度、高效率和高可靠性。"
    },
    {
      id: 1,
      image: img2,
      title: "先进技术",
      description: "我们的机械集成了超过60种先进控制装置，以最新的创新优化您的生产线，提高精度并减少浪费。"
    },
    {
      id: 2,
      image: img3,
      title: "行业专业知识",
      description: "我们拥有超过200名技术熟练的专业人员，团队在非织造布加工设备制造方面拥有数十年的经验，能够提供满足现代行业需求的解决方案。"
    },
    {
      id: 3,
      image: img4,
      title: "经过验证的质量",
      description: "自1999年以来，我们为医疗、美容和酒店等行业提供耐用且高质量的机械，确保可靠的性能和一致的结果。"
    },
    {
      id: 4,
      image: img5,
      title: "可靠的售后支持",
      description: "我们提供全天候支持，包括安装、培训和维护，确保您的设备高效运行并在整个生命周期内保持最佳状态。"
    },
    {
      id: 5,
      image: img6,
      title: "高性价比的制造",
      description: "我们的机器结合了高性能和高性价比，在不影响预算或运营效率的情况下提供卓越的结果。"
    }
  ];

  return (
    <div className="py-5 md:py-8 bg-[#E4E5DF]">
      {/* Pass pure data to the client component */}
      <WhyChooseUsContent 
        title="为什么选择我们：因为您的成功是我们的首要任务"
        buttonText="查看我们的工作"
        features={featuresData}
      />
    </div>
  );
};

export default WhyChooseUs;