import Link from "next/link";
import TopGap from "../../../components/Shared/TopGap/TopGap";
import { MdSpeed, MdSettings, MdShield, MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "全自动口罩生产设备市场 — 2026年完整采购指南",
  description: "2026年全自动口罩生产机械的全面 B2B 采购指南。对比设备速度、PLC 控制系统、超声波焊接频率以及生产产能参数。",
};

export default function BuyingGuidePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <TopGap />
      
      {/* 篇文章横幅 */}
      <div className="bg-[#023047] text-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block px-3 py-1 bg-[#86BCFC] text-[#023047] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            行业分析与采购指南
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            全自动口罩生产设备市场 — 2026年完整采购指南
          </h1>
          <p className="mt-4 text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
            探索在 2026 年扩大 B2B 无纺布个人防护口罩生产所需的关键参数、机械创新 and 制造见解。
          </p>
          <div className="mt-6 flex items-center gap-4 text-xs text-slate-400">
            <span>发布时间：2026年2月</span>
            <span>•</span>
            <span>作者：快裕达编辑部</span>
          </div>
        </div>
      </div>

      {/* 文章内容 */}
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 文章主体 */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-10 border border-slate-200/60 shadow-sm text-slate-700 leading-relaxed text-sm md:text-base space-y-6">
            
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#023047]">引言</h2>
              <p>
                进入 2026 年，对高效、自动化医疗个人防护装备 (PPE) 制造机械的需求持续增长。希望扩大工厂规模的 B2B 买家已不再仅仅关注基础价格。现代竞争指标更侧重于降低人工成本、提高生产速度并确保超声波焊接的一致性。
              </p>
              <p>
                在本指南中，我们将详细拆解购买 <Link href="/category/face-mask-machinery" className="text-[#064a9b] font-semibold hover:underline">全自动口罩生产设备</Link> 时必不可少的技术考量，并对比快裕达 (GDKYD) 的工业级产品方案。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#023047]">评估口罩机械设备时的核心考虑因素</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex gap-3">
                  <MdSpeed className="text-[#064a9b] text-3xl shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">1. 生产速度</h4>
                    <p className="text-xs text-slate-500 mt-1">高速生产线必须达到每分钟 120-150 片的产能，以平衡电力成本。建议选择集成自动码垛系统的设备。</p>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex gap-3">
                  <MdSettings className="text-[#064a9b] text-3xl shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">2. PLC 智能控制系统</h4>
                    <p className="text-xs text-slate-500 mt-1">可靠的可编程逻辑控制器 (PLC) 可实现自动放料、超声波焊接和分切的无缝协同，最大限度地减少原材料损耗。</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex gap-3">
                  <MdShield className="text-[#064a9b] text-3xl shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">3. 超声波焊接稳定性</h4>
                    <p className="text-xs text-slate-500 mt-1">医用外科口罩需要 20-25 kHz 的超声波频率，以牢固固定耳带并保证焊接点的拉力与耐用性。</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex gap-3">
                  <MdCall className="text-[#064a9b] text-3xl shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">4. 原料卷放料控制</h4>
                    <p className="text-xs text-slate-500 mt-1">自动纠偏和张力控制系统对于防止无纺布材料在高速运行中发生偏移和起皱至关重要。</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#023047]">平面型、N95杯型及折叠型口罩设备对比</h2>
              <p>
                您对口罩机款式的选择很大程度上取决于目标市场定位：
              </p>
              <div className="overflow-hidden border border-slate-200 rounded-lg text-xs md:text-sm">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50 text-slate-700 font-bold">
                    <tr>
                      <th className="px-3 py-2 text-left">设备类型</th>
                      <th className="px-3 py-2 text-left">适用场景</th>
                      <th className="px-3 py-2 text-left">平均速度</th>
                      <th className="px-3 py-2 text-left">核心特点</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white text-slate-600">
                    <tr>
                      <td className="px-3 py-2 font-bold text-slate-800">平面医用外科口罩机</td>
                      <td className="px-3 py-2">一次性三层医用口罩生产</td>
                      <td className="px-3 py-2">120-150 片/分钟</td>
                      <td className="px-3 py-2">高产能、高速输出</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-bold text-slate-800">N95 杯型防护口罩机</td>
                      <td className="px-3 py-2">立体防尘与呼吸防护面罩</td>
                      <td className="px-3 py-2">30-40 片/分钟</td>
                      <td className="px-3 py-2">热压杯体成型工艺</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-bold text-slate-800">柳叶型/鱼型 3D 口罩机</td>
                      <td className="px-3 py-2">高端 3D 立体贴合口罩</td>
                      <td className="px-3 py-2">60-80 片/分钟</td>
                      <td className="px-3 py-2">精细的折叠成型工艺</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#023047]">推荐机械设备产品线</h2>
              <ul className="space-y-4">
                <li className="border-l-4 border-[#064a9b] pl-3">
                  <h4 className="font-bold text-slate-800">
                    <Link href="/product/automatic-medical-surgical-face-mask-machine" className="hover:text-[#064a9b] hover:underline">
                      全自动平面口罩制造机 (医用/外科)
                    </Link>
                  </h4>
                  <p className="text-xs mt-1">
                    一款中低投资级别的核心设备，可在一套连续、高速的工作流中全自动完成物料放料、本体成型、鼻梁条置入、超声波耳带熔接和裁剪。
                  </p>
                </li>
                <li className="border-l-4 border-[#064a9b] pl-3">
                  <h4 className="font-bold text-slate-800">
                    <Link href="/product/automatic-cup-mask-making-machinen95-cup-mask-machine" className="hover:text-[#064a9b] hover:underline">
                      全自动 N95/KN95 杯型防尘口罩制造机
                    </Link>
                  </h4>
                  <p className="text-xs mt-1">
                    专为高防护呼吸器制造而设计。集成自动化面料成型、鼻夹贴合、图案印刷和耳带焊接等全工序。
                  </p>
                </li>
                <li className="border-l-4 border-[#064a9b] pl-3">
                  <h4 className="font-bold text-slate-800">
                    <Link href="/category/medical-machinery" className="hover:text-[#064a9b] hover:underline">
                      无纺布医疗帽及隔离衣生产线
                    </Link>
                  </h4>
                  <p className="text-xs mt-1">
                    适合拓展多元化 PPE 产品的制造商。包括高效率的一次性医生帽、鞋套以及无纺布隔离衣等定制化机械生产线。
                  </p>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#023047]">总结与下一步行动</h2>
              <p>
                选择合适的口罩生产设备需要平衡产能目标与原材料的兼容度。自 1999 年以来，快裕达精密机械致力于设计和制造高水准的全自动非织造布深加工成套生产线。
              </p>
              <p>
                准备好优化您的生产线了吗？欢迎直接联系我们的技术销售团队，获取专业设备配置支持和生产规划方案。
              </p>
            </section>

          </div>

          {/* 侧边栏 B2B 询盘 */}
          <div className="space-y-6">
            
            {/* 快速联系 */}
            <div className="bg-[#023047] text-white rounded-2xl p-6 shadow-sm border border-slate-800 flex flex-col gap-4 text-start">
              <h3 className="text-lg font-bold">索取产品报价</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                直接联系我们位于中国广东的制造工厂，获取设备定制配置方案、运费估算和批量采购报价。
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=8613902617335&text=Hello,%20I'm%20interested%20in%20Automatic%20Mask%20Production%20Equipment%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white py-3 rounded-xl font-bold text-xs shadow-md transition-all duration-300"
              >
                <FaWhatsapp size={16} />
                <span>通过 WhatsApp 沟通</span>
              </a>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-[#86BCFC] hover:bg-[#6baaf5] text-[#023047] py-3 rounded-xl font-bold text-xs shadow-md transition-all duration-300"
              >
                <span>索取定制报价</span>
              </Link>
            </div>

            {/* 工厂保证清单 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm text-start">
              <h3 className="text-base font-bold text-slate-900 mb-3">工厂出厂标准保证</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#064a9b]"></span>
                  <span>100% 自动协同</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#064a9b]"></span>
                  <span>PLC 智能同步</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#064a9b]"></span>
                  <span>符合 CE & ISO-9001 标准</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#064a9b]"></span>
                  <span>全方位远程调试支持</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
