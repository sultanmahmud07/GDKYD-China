import img1 from "../../../../public/assets/services/processed/1.jpg";
import img2 from "../../../../public/assets/services/processed/2.jpg";
import img3 from "../../../../public/assets/services/processed/3.jpg";
import img4 from "../../../../public/assets/services/processed/4.jpg";
import Image from "next/image";

const ProductProcesses = () => {
  const processData = {
    section1: {
      title: "口罩机械",
      description: "KYD 的口罩机械旨在以精准和高效的方式简化医疗和非医疗口罩的生产。我们的高速机器，例如全自动口罩制造机，可以生产各种口罩，包括医用口罩、N95 口罩和一次性口罩。这些机器配备了先进的技术，可以无缝整合面料层、耳带和鼻梁，确保高质量口罩具有最佳的过滤性能。通过自动化的切割、折叠、焊接和包装工艺，我们的机器在保持最高质量标准的同时提高了生产能力。"
    },
    section2: {
      title: "化妆品和生活用品生产机械",
      description: "我们的化妆品和生活用品生产机械专为生产各种个人护理用品、化妆棉等而设计。KYD 的化妆棉生产机设计用于高速生产，确保产品质量的一致性，同时优化效率。这些机器提供可定制的选项，可处理不同的材料，如无纺布和水刺布，非常适合化妆品和医疗保健行业的快速需求。我们的机械集成了尖端技术，提供准确的配料、折叠和包装，提升质量控制并缩短生产时间。"
    },
    section3: {
      title: "医疗产品生产机械",
      description: "KYD 的医疗产品生产机械为生产高质量的医疗用品提供了全面的解决方案，包括手术口罩、防护服和其他无纺布医疗产品。我们的医疗口罩生产机专为自动生产符合全球健康标准的医疗级口罩而设计。我们还提供专业机器，如医疗防护服和手术产品机器，确保医疗行业的无菌精确制造。我们的机器配备了先进的功能，例如自动布料张力控制、高速组装和严格的质量控制检查，以确保每个产品都符合所需的医疗标准。"
    },
    section4: {
      title: "包装机械",
      description: "我们的包装机械旨在简化各种行业的包装流程，包括医疗、化妆品和工业产品。KYD 的自动包装机可以高效地包装口罩、湿巾和其他产品，确保最少的人工干预并减少错误。这些机器能够处理不同类型的包装，例如吸塑包装、盒装和塑料袋包装，并具有高速和高精度的特点。自动装袋、封口和贴标等功能使其成为寻求提高包装效率同时保持高卫生和展示标准的企业的理想选择。"
    }
  };

  const keys = ['section1', 'section2', 'section3', 'section4'];
  const images = [img1, img2, img3, img4];
  return (
    <div className="main_container py-5 md:py-16">
      <div className="flex flex-col gap-3 md:gap-5">
        {keys?.map((section, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col gap-3 md:gap-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  width={600}
                  src={images[index]}
                  alt={"Process images"}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Text */}
              <div className="w-full text-[#000000] p-0 md:px-7 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl md:text-4xl font-bold my-2 md:my-3 text-secondary">
                  {processData[section].title}
                </h2>
                <p className="my-2 md:my-4 md:text-xl"> {processData[section].description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductProcesses;
