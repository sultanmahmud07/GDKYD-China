import WintechStandardContent from "./WintechStandardContent";

// Import your images
import img1 from "../../../../../public/assets/services/standard/1.png";
import img2 from "../../../../../public/assets/services/standard/2.png";
import img3 from "../../../../../public/assets/services/standard/3.png";

const WintechStandard = () => {
  const itemsData = [
    {
      image: img1,
      title: "质量",
      description: "KYD确保我们生产的每一台机器都具有一流的质量。从口罩生产设备到化妆品生产线，我们在整个制造过程中实施严格的质量控制。每台机器都以精度、耐用性和长期性能为设计目标，满足您的业务需求，提供一致且可靠的结果。"
    },
    {
      image: img2,
      title: "认证",
      description: "我们的机器完全符合认证标准，满足ISO 9001质量管理和CE标志安全合规等行业标准。这些认证表明我们的设备符合国际标准，为客户提供可靠且安全的机械设备的信心。"
    },
    {
      image: img3,
      title: "质量文件",
      description: "我们为每台机器提供全面的质量文件，包括测试报告、检验证书和用户手册。这些文件确保您拥有操作、维护和故障排除设备所需的所有信息，从而实现顺利的集成和高效的运行表现。"
    }
  ];

  return (
    <WintechStandardContent 
      title="KYD质量保证"
      items={itemsData}
    />
  );
};

export default WintechStandard;