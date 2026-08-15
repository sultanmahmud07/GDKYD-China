"use client";
import { 
  MdOutlineKeyboardDoubleArrowRight, 
  MdBusiness, 
  MdEngineering, 
  MdEco, 
  MdHandshake, 
  MdTrendingUp, 
  MdGavel, 
  MdDiamond 
} from "react-icons/md";

const WeDo = () => {
  const coreValues = [
    { title: "Innovation", desc: "We constantly push the boundaries of technology to improve our machinery and processes." },
    { title: "质量", desc: "Our products are built to be reliable, durable, and high-performing." },
    { title: "Sustainability", desc: "We prioritize eco-friendly methods and responsible sourcing in all our production." },
    { title: "Customer Focus", desc: "We place customer satisfaction at the core of everything we do." }
  ];

  return (
    <section className="py-10 md:py-20 bg-[#F9FAFB]">
      <div className="main_container">
        
        {/* --- ROW 1: Introduction (Company & What We Do) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          
          {/* Company */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 text-[#064a9b] rounded-lg">
                <MdBusiness size={24} />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-[#252B42]">
                {"企业文化"}
              </h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {"创造力、协作和持续学习是我们公司的基础。我们投资于团队的成长，营造包容的文化，鼓励创新和分享想法。"}
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-primary/65 p-6 md:p-8 rounded-2xl shadow-sm text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <MdEngineering size={24} />
              </div>
              <h4 className="text-xl md:text-2xl font-bold">
                {"我们的业务"}
              </h4>
            </div>
            <p className="text-blue-50 leading-relaxed">
              {"自1999年以来，快裕达一直是无纺布机械制造领域的领导者。我们专注于制造可定制的高性能设备，结合超声波和机械技术，提供满足全球客户独特需求的解决方案。"}
            </p>
          </div>
        </div>

        {/* --- ROW 2: Core Values (Split into 4 cards) --- */}
        <div className="mb-6">
           <h4 className="text-xl md:text-2xl font-bold text-[#252B42] mb-4 flex items-center gap-2">
              <MdDiamond className="text-[#064a9b]" />
              {"核心价值观"}
           </h4>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {coreValues.map((val, index) => (
                <div key={index} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
                   <div className="mb-2 text-secondary">
                      <MdOutlineKeyboardDoubleArrowRight size={20} />
                   </div>
                   <p className="text-gray-700 text-sm leading-relaxed">
                      <strong className="font-bold text-[#252B42]">{val.title}: </strong>
                      {val.desc}
                   </p>
                </div>
              ))}
           </div>
        </div>

        {/* --- ROW 3: Information Grid (Sustainability, Partners, Condition, Future) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
          
          {/* Sustainability */}
          <InfoCard 
            icon={<MdEco />} 
            title={"可持续发展实践"} 
            desc={"我们致力于通过采用节能技术和减少浪费来降低环境影响。我们的努力不仅限于设备，还持续寻求使运营更加环保的方法。"} 
            color="text-green-600" 
            bgColor="bg-green-50"
          />

          {/* Our Partner */}
          <InfoCard 
            icon={<MdHandshake />} 
            title={"我们的合作伙伴"} 
            desc={"在快裕达，我们与行业内的顶尖企业合作，包括霍尼韦尔（Honeywell）、威高（WEGO）、大疆（DJI）和稳健医疗（Winner Medical）。这些合作伙伴关系帮助我们提供创新和可靠的解决方案，支持客户在全球范围内的成功"} 
            color="text-indigo-600" 
            bgColor="bg-indigo-50"
          />

          {/* Future */}
          <InfoCard 
            icon={<MdTrendingUp />} 
            title={"未来愿景"} 
            desc={"展望未来，快裕达致力于拓展全球影响力，并引入新的创新技术，以帮助客户在竞争激烈的市场中保持领先地位。我们的目标是继续引领无纺布机械行业，同时秉承卓越的传统。"} 
            color="text-purple-600" 
            bgColor="bg-purple-50"
          />

           {/* Condition */}
           <InfoCard 
            icon={<MdGavel />} 
            title={"认证与认可"} 
            desc={"我们的质量承诺在全球范围内得到了认可，包括ISO 9001和CE认证，以及因创新和性能而获得的行业特定奖项。"} 
            color="text-orange-600" 
            bgColor="bg-orange-50"
          />
        </div>

        {/* --- ROW 4: Services (Full Width Highlight) --- */}
        <div className="bg-white rounded-2xl p-6 md:p-10 border-t-4 border-[#064a9b] shadow-sm">
          <h4 className="text-2xl font-bold text-[#252B42] mb-4">
            {"我们的服务"}
          </h4>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
                <p className="text-gray-600 mb-4 leading-relaxed">
                    {"我们提供全方位支持，从售前咨询到售后服务："}
                </p>
                <p className="text-gray-600 leading-relaxed">
                    {"在快裕达，我们不仅交付设备，还通过创新、质量和卓越支持与客户建立长期的合作关系。"}
                </p>
            </div>
            
            <div className="lg:w-1/2 bg-gray-50 rounded-xl p-6">
                <h5 className="font-bold text-gray-800 mb-3 uppercase text-sm tracking-wider">Key Services</h5>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <span className="mt-1 text-[#064a9b]"><MdOutlineKeyboardDoubleArrowRight /></span>
                        <span className="text-gray-700 font-medium">{"售前支持：专家咨询、定制设计图纸和定制化生产服务。"}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1 text-[#064a9b]"><MdOutlineKeyboardDoubleArrowRight /></span>
                        <span className="text-gray-700 font-medium">{"售后支持：一年保修、免费培训、详尽的操作手册、远程支持和现场服务。"}</span>
                    </li>
                </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Helper Component for the Info Grid ---
const InfoCard = ({ icon, title, desc, color, bgColor }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${bgColor} ${color} text-xl`}>
                    {icon}
                </div>
                <h4 className="text-lg font-bold text-[#252B42]">{title}</h4>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {desc}
            </p>
        </div>
    );
};

export default WeDo;