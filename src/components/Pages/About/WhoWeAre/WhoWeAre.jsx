import Image from "next/image";
import img from "../../../../../public/assets/about-img/who-we-are.jpg";

const WhoWeAre = () => {
    return (
    <div className="my-6 md:my-14">
      <div className="main_container">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-3 md:gap-5">
          <div className="left_content_we">
            <h2 className="text-2xl md:text-3xl font-bold text-[#070F11] my-4">
              {"公司概况"}
            </h2>
            <p className="my-2"> {"自1999年成立以来，广东 快裕达精密机械有限公司专注于无纺布制品生产设备的研发制造，已有20余年的行业经验。作为行业内值得信赖且经验丰富的品牌，我们专注于机器与超声波技术的结合。以客户为中心，我们致力于提供量身定制的综合生产解决方案，以满足客户的具体需求。"}</p>
            <h4 className="text-xl md:text-xl font-semibold text-[#070F11] my-1">
              {"我们的承诺"}
            </h4>
            <p className="my-2">
              {" "}
              {"在 快裕达，合作的每个阶段都至关重要——设计、生产和服务。由150多名员工组成的敬业团队，包括40名技术精湛的研发人员，确保持续创新以克服技术挑战并优化设备设计。我们由20多名成员组成的售后团队随时准备提供迅速支持，为客户提供无缝的体验。"} {"创新是 快裕达的核心价值。我们不断探索新技术应用，提升产品性能，改善服务质量。这种承诺使我们在无纺布产品加工及设备领域赢得了广泛认可和赞誉。"}
            </p>
            <h4 className="text-xl md:text-xl font-semibold text-[#070F11] my-1">
              {"创新与卓越"}
            </h4>
            {/* <p className="my-2">   {"创新是 快裕达的核心价值。我们不断探索新技术应用，提升产品性能，改善服务质量。这种承诺使我们在无纺布产品加工及设备领域赢得了广泛认可和赞誉。"}</p> */}
            <p className="my-2"> {"凭借强大的全球影响力，我们的产品销往30多个国家，并与日本、越南、印度、委内瑞拉和墨西哥的知名客户建立了长期合作伙伴关系。包括霍尼韦尔（Honeywell）、威高（WEGO）、大疆（DJI）和稳健医疗（Winner Medical）等800多家公司信赖 快裕达，成为无纺布机械领域的可靠合作伙伴。"}</p>
          </div>
          <div className="right_img_we">
            <Image
              width={800}
              src={img}
              alt={"Who-we-are-image"}
              className="w-full rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
