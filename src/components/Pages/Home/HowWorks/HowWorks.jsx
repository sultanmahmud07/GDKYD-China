import HowWorksContent from "./HowWorksContent"; // Import Client Component
import worksImg from "../../../../../public/assets/home-img/work-img/location.webp";

const HowWorks = () => {
  const stepsData = [
    {
      title: "初步咨询",
      description: "与我们分享您的需求和挑战，我们将为您的业务量身定制最佳的机械解决方案。"
    },
    {
      title: "定制设计",
      description: "我们拥有自己的研发团队，可以根据客户需求设计机械。我们的工程师制定详细规格，注重效率、精度和易用性。"
    },
    {
      title: "生产制造",
      description: "利用最先进的设备，我们按照最高的质量标准制造您的机械。"
    },
    {
      title: "测试与质量控制",
      description: "每台机器都经过严格的测试，确保其在实际条件下无故障运行。"
    },
    {
      title: "安装与培训",
      description: "我们的团队在您的设施中安装机械并提供现场培训，确保您的团队能够高效操作设备。"
    },
    {
      title: "持续支持",
      description: "通过我们的售后服务，包括维护和故障排除，确保您的机械始终保持最佳性能。"
    }
  ];

  return (
    <div className="py-8 md:py-16 bg-[#F8F9FA]"> {/* Updated background to a cleaner light gray */}
      <HowWorksContent 
        title="我们的定制机械解决方案如何运作"
        steps={stepsData}
        imageSrc={worksImg}
      />
    </div>
  );
};

export default HowWorks;